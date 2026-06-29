from django.db import models
from django.utils import timezone

class Patient(models.Model):
    patient_name = models.CharField(max_length=100)
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)

    blood_group = models.CharField(max_length=10)

    phone = models.CharField(max_length=15)

    hospital = models.CharField(max_length=150, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)

    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.patient_name