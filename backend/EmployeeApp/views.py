from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from EmployeeApp.models import *
from .serializer import *

# Create your views here.
@api_view(["GET"])
def show_all(request):
    emp = EmployeeModel.objects.all()
    serializer = EmployeeSerializer(emp, many=True)
    return Response(serializer.data)
