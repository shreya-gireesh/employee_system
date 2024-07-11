# Generated by Django 5.0.6 on 2024-07-06 08:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ManagerApp', '0002_remove_addprojectmodel_project_days_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectassignmodel',
            name='project',
        ),
        migrations.RemoveField(
            model_name='taskmodel',
            name='project',
        ),
        migrations.RemoveField(
            model_name='projectassignmodel',
            name='manager_assign',
        ),
        migrations.RemoveField(
            model_name='taskassignmodel',
            name='employee',
        ),
        migrations.RemoveField(
            model_name='taskassignmodel',
            name='task',
        ),
        migrations.DeleteModel(
            name='AddProjectModel',
        ),
        migrations.DeleteModel(
            name='ProjectAssignModel',
        ),
        migrations.DeleteModel(
            name='TaskAssignModel',
        ),
        migrations.DeleteModel(
            name='TaskModel',
        ),
    ]