from django.db import models
from AdminApp.models import DepartmentModel


# Create your models here.
class EmployeeModel(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]
    employee_id = models.AutoField(primary_key=True)
    employee_firstname = models.CharField(max_length=100)
    employee_lastname = models.CharField(max_length=100)
    employee_gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    employee_email = models.CharField(max_length=100)
    employee_phone = models.CharField(max_length=100)
    employee_password = models.CharField(max_length=100)
    employee_hire_date = models.DateField()
    employee_department = models.ForeignKey(DepartmentModel, on_delete=models.CASCADE, null=True)
    employee_position = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.employee_lastname} {self.employee_firstname}"


# class EmployeeImgModel(models.Model):
#     employee_image_id = models.AutoField(primary_key = True)
#     employee = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE, null=True)
#     employee_image = models.ImageField(upload_to='/profile')

class EmpAttendanceModel(models.Model):
    empattendance_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    sign_in = models.DateTimeField()
    sign_out = models.DateTimeField()


class LeaveModel(models.Model):
    leave_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    reason = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=100)


class SalaryModel(models.Model):
    salary_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    total_days = models.IntegerField()
    overtime = models.IntegerField()
    total_amount = models.IntegerField()
