from rest_framework import serializers
from AdminApp.models import *

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DepartmentModel
        fields = '__all__'