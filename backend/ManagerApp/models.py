from django.db import models
from AdminApp.models import DepartmentModel
from EmployeeApp.models import EmployeeModel


# Create your models here.


class ManagerModel(models.Model):
    manager_id = models.AutoField(primary_key=True)
    manager_first_name = models.CharField(max_length=100)
    manager_last_name = models.CharField(max_length=100)
    manager_email = models.CharField(max_length=100)
    manager_phoneno = models.CharField(max_length=100)
    manager_department = models.ForeignKey(DepartmentModel, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.manager_first_name} {self.manager_last_name}"


class AddProjectModel(models.Model):
    PROJECT_STATUS_CHOICES = [
        ('Planned', 'Planned'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
        ('On Hold', 'On Hold'),
    ]

    PRIORITY_LEVEL_CHOICES = [
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low'),
    ]
    project_id = models.AutoField(primary_key=True)
    project_name = models.CharField(max_length=100)
    project_desc = models.TextField()
    project_manager = models.ForeignKey(ManagerModel, on_delete=models.CASCADE)
    project_start_date = models.DateField(null=True)
    project_end_date = models.DateField(null=True)
    project_status = models.CharField(max_length=20, choices=PROJECT_STATUS_CHOICES)
    assigned_employees = models.ManyToManyField(EmployeeModel, related_name='assigned_projects')
    priority_level = models.CharField(max_length=10, choices=PRIORITY_LEVEL_CHOICES)

    def __str__(self):
        return self.project_name


# class ProjectAssignModel(models.Model):
#     project_assign_id = models.AutoField(primary_key=True)
#     manager_assign = models.ForeignKey(ManagerModel, on_delete=models.CASCADE)
#     project = models.ForeignKey(AddProjectModel, on_delete=models.CASCADE)
#
#     def __str__(self):
#         return f"{self.manager_assign.manager_first_name} {self.project.project_name}"


# class TaskModel(models.Model):
#     task_id = models.AutoField(primary_key=True)
#     project = models.ForeignKey(AddProjectModel, on_delete=models.CASCADE)
#     task_name = models.CharField(max_length=100)
#     task_desc = models.TextField()
#     total_days = models.IntegerField()
#
#     def __str__(self):
#         return self.task_name


# class TaskAssignModel(models.Model):
#     taskassign_id = models.AutoField(primary_key=True)
#     employee = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
#     task = models.ForeignKey(TaskModel, on_delete=models.CASCADE)
#     status = models.CharField(max_length=100)


class HrModel(models.Model):
    hr_id = models.AutoField(primary_key=True)
    hr_firstname = models.CharField(max_length=100)
    hr_lastname = models.CharField(max_length=100)
    hr_email = models.CharField(max_length=100)
    hr_phone = models.CharField(max_length=100)
    hr_password = models.CharField(max_length=100)


class RecruitmentModel(models.Model):
    recruitment_id = models.AutoField(primary_key=True)
    manager = models.ForeignKey(ManagerModel, on_delete=models.CASCADE)
    position = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=100)


class ApplicantModel(models.Model):
    applicant_id = models.AutoField(primary_key=True)
    applicant_firstname = models.CharField(max_length=100)
    applicant_lastname = models.CharField(max_length=100)
    applicant_email = models.CharField(max_length=100)
    applicant_phone = models.CharField(max_length=100)
    applicant_password = models.CharField(max_length=100)


class JobApplicationModel(models.Model):
    application_id = models.AutoField(primary_key=True)
    applicant = models.ForeignKey(ApplicantModel, on_delete=models.CASCADE)
    position = models.ForeignKey(RecruitmentModel, on_delete=models.CASCADE)
    status = models.CharField(max_length=100)


class PerformanceModel(models.Model):
    performance_id = models.AutoField(primary_key=True)
    application = models.ForeignKey(JobApplicationModel, on_delete=models.CASCADE)
    hr = models.ForeignKey(HrModel, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comments = models.CharField(max_length=100)


class TrainerModel(models.Model):
    trainer_id = models.AutoField(primary_key=True)
    trainer_name = models.CharField(max_length=100)


class TrainingModel(models.Model):
    training_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    trainer = models.ForeignKey(TrainerModel, on_delete=models.CASCADE)


class TrainingAttendanceModel(models.Model):
    attendance_id = models.AutoField(primary_key=True)
    application = models.ForeignKey(JobApplicationModel, on_delete=models.CASCADE)
    training = models.ForeignKey(TrainingModel, on_delete=models.CASCADE)
    status = models.CharField(max_length=100)
