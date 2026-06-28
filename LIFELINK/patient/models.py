from django.db import models

class Patient(models.Model):
    patient_id = models.CharField(max_length=20)
    patient_name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    blood_group = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.patient_name