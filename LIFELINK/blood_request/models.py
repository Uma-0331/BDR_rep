from django.db import models

from django.db import models

class BloodRequest(models.Model):
    patient_name = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=5)
    units_required = models.IntegerField()
    city = models.CharField(max_length=100)

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Pending'
    )

    def __str__(self):
        return self.patient_name