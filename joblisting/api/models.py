from django.db import models
from django.core.validators import URLValidator
class Job(models.Model):
    title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    posted_date = models.DateField()
    details_url = models.TextField()
    work_from_home_availability = models.CharField(max_length=50, null=True, blank=True)
    salary = models.CharField(max_length=255, null=True, blank=True)
    employment_type = models.CharField(max_length=50, null=True, blank=True)
    company_logo_url = models.URLField(max_length=500, null=True, blank=True)
