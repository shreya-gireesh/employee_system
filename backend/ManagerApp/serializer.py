from ManagerApp.models import *
from rest_framework import serializers


class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerModel
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddProjectModel
        fields = '__all__'
