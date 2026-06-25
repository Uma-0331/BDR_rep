from django.db import models

class AdminModule(models.Model):
    admin_id = models.CharField(max_length=20)
    admin_name = models.CharField(max_length=100)
    admin_email = models.EmailField()
    admin_phone = models.CharField(max_length=15)

    def __str__(self):
        return self.admin_name
