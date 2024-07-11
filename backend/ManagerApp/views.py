from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ManagerApp.models import *
from .serializer import *
from EmployeeApp.serializer import EmployeeSerializer

# Create your views here.
@api_view(["GET"])
def all_manager(request):
    manager = ManagerModel.objects.all()
    manager_data = ManagerSerializer(manager, many=True)
    return Response(manager_data.data)


@api_view(["GET"])
def show_all(request):
    project = AddProjectModel.objects.all()
    serializer = ProjectSerializer(project, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_project(request):
    project = ProjectSerializer(data=request.data)
    if project.is_valid():
        project.save()
        return Response({"message": "Successfully added"})
    return Response(project.errors)


@api_view(["GET"])
def get_project(request, id):
    project = AddProjectModel.objects.get(project_id = id)
    project_data = ProjectSerializer(project, many=False)
    return Response(project_data.data)


@api_view(["POST"])
def add_employee(request):
    employee = EmployeeSerializer(data=request.data)
    if employee.is_valid():
        employee.save()
        return Response({"message": "successfully added"})
    return Response(employee.errors)