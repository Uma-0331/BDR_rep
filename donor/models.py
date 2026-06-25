from django.db import models



class Donor(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    blood_group = models.CharField(max_length=5)
    address = models.TextField()

    def __str__(self):
        return self.name