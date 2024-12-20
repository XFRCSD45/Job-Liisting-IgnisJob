import scrapy
import requests
import json
import os
from datetime import datetime


class JobsSpider(scrapy.Spider):
    name = 'jobs'
    api_key = os.getenv('DICE_API_KEY')

    # API URL and headers
    api_url = 'https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/search'
    headers = {
        'x-api-key': api_key,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    }

    # Parameters for the API
    params = {
        'q': 'Software',
        'countryCode2': 'US',
        'radius': '30',
        'radiusUnit': 'mi',
        'page': '1',
        'pageSize': '20',
        'facets': 'employmentType|postedDate|workFromHomeAvailability|workplaceTypes|employerType|easyApply|isRemote|willingToSponsor',
        'filters.workplaceTypes': 'Remote',
        'filters.employmentType': 'CONTRACTS',
        'filters.postedDate': 'ONE',
        'currencyCode': 'USD',
        'fields': 'id|jobId|guid|summary|title|postedDate|modifiedDate|jobLocation.displayName|detailsPageUrl|salary|clientBrandId|companyPageUrl|companyLogoUrl|companyLogoUrlOptimized|positionId|companyName|employmentType|isHighlighted|score|easyApply|employerType|workFromHomeAvailability|workplaceTypes|isRemote|debug|jobMetadata|willingToSponsor',
        'culture': 'en',
        'recommendations': 'true',
        'interactionId': '0',
        'fj': 'true',
        'includeRemote': 'true',
    }

    def start_requests(self):
        """
        Initiates the API request for the first page.
        """
        self.logger.info("Starting API requests")
        yield scrapy.Request(
            url=self.api_url,
            headers=self.headers,
            method='GET',
            callback=self.parse,
            dont_filter=True,
        )

    def parse(self, response):
        """
        Parses the API response and handles pagination.
        """
        try:
            data = json.loads(response.text)
            jobs = data.get('data', [])

            # Process each job and send it to the backend
            for job in jobs:
                print(job)
                job_data = {
                    'title': job.get('title'),
                    'company_name': job.get('companyName'),
                    'location': job.get('jobLocation', {}).get('displayName'),
                    'posted_date': self.format_date(job.get('postedDate')),
                    'details_url': job.get('detailsPageUrl'),
                    'work_from_home_availability': job.get('workFromHomeAvailability'),
                    'salary': job.get('salary'),
                    'employment_type': job.get('employmentType'),
                    'company_logo_url': job.get('companyLogoUrl'),
                }
                self.send_to_backend(job_data)

            # Handle pagination
            next_page = int(self.params['page']) + 1
            if len(jobs) > 0:
                self.params['page'] = str(next_page)
                yield scrapy.Request(
                    url=self.api_url,
                    headers=self.headers,
                    method='GET',
                    callback=self.parse,
                    dont_filter=True,
                )

        except json.JSONDecodeError:
            self.logger.error("Failed to parse JSON response")
            self.logger.error(response.text)

    def send_to_backend(self, job_data):
        """
        Sends job data to the Django backend using a POST request.
        """
        try:
            response = requests.post(
                'http://127.0.0.1:8000/jobs/add/', json=job_data
            )
            if response.status_code == 201:
                self.logger.info(f"Successfully added job: {job_data['title']}")
            else:
                self.logger.error(
                    f"Failed to add job: {job_data['title']}, Response: {response.text}"
                )
        except requests.exceptions.RequestException as e:
            self.logger.error(f"Error sending job data to backend: {e}")

    def format_date(self, date_str):
        """
        Formats the date to YYYY-MM-DD.
        """
        try:
            parsed_date = datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%SZ")
            return parsed_date.strftime("%Y-%m-%d")
        except ValueError:
            return None

    # def truncate_url(self, url, max_length=200):
    #     """
    #     Truncates the URL to the maximum allowed length.
    #     """
    #     return url[:max_length]
