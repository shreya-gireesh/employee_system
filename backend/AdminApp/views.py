from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.
@api_view(['GET'])
def get_department(request):
    department = DepartmentModel.objects.all()
    all_dept = DepartmentSerializer(department, many=True)
    return Response(all_dept.data)