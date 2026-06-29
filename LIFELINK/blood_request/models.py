from django.db import models

class BloodRequest(models.Model):

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]

    BLOOD_GROUPS = [
        ('A+', 'A+'), ('A-', 'A-'),
        ('B+', 'B+'), ('B-', 'B-'),
        ('AB+', 'AB+'), ('AB-', 'AB-'),
        ('O+', 'O+'), ('O-', 'O-'),
    ]

    patient_name = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=5, choices=BLOOD_GROUPS)
    units_required = models.PositiveIntegerField()
    city = models.CharField(max_length=100)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return self.patient_name