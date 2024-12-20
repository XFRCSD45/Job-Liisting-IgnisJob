from django.db import models
from django.core.validators import URLValidator
class Job(models.Model):
    title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    posted_date = models.DateField()
    details_url = models.TextField()
