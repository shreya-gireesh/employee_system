from django.db import models


# Create your models here.
class AdminModel(models.Model):
    admin_id = models.AutoField(primary_key=True)
    admin_name = models.CharField(max_length=100)
    admin_mail = models.CharField(max_length=100)
    admin_phone = models.CharField(max_length=100)
    admin_password = models.CharField(max_length=100)

    def __str__(self):
        return self.admin_name


class DepartmentModel(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_name = models.CharField(max_length=100)

    def __str__(self):
        return self.department_name
