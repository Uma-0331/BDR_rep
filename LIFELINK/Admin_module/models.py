from django.db import models

class AdminModule(models.Model):
    admin_id = models.CharField(max_length=20)
    admin_name = models.CharField(max_length=100)

    hospital_name = models.CharField(max_length=100)
    department = models.CharField(max_length=100, default="General")

    admin_email = models.EmailField()
    admin_phone = models.CharField(max_length=15)
    status = models.CharField(max_length=20)   # or BooleanField etc.

    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
    ]

    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='Active'
    )

    def __str__(self):
        return self.admin_name