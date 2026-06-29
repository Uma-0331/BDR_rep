from django.db import models
from django.utils import timezone

class Donor(models.Model):

    BLOOD_GROUPS = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]

    GENDER = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField(default=18)
    gender = models.CharField(max_length=10, choices=GENDER, default="Male")

    blood_group = models.CharField(max_length=5, choices=BLOOD_GROUPS)

    phone = models.CharField(max_length=15, default="")
    email = models.EmailField(default="")

    city = models.CharField(max_length=100)
    address = models.TextField(default="")

    last_donation = models.DateField(null=True, blank=True)

    available = models.BooleanField(default=True)

    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name