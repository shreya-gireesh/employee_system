"""
URL configuration for EmployeeSystem project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from EmployeeApp import views as employee
from ManagerApp import views as manager
from AdminApp import views as customadim

urlpatterns = [
    path('admin/', admin.site.urls),
    # Employee
    path('all_employee', employee.show_all),


    # Manager
    path('all_managers', manager.all_manager),
    path('all_project', manager.show_all),
    path('add_employee', manager.add_employee),
    path('add_projects', manager.add_project),
    path('get_project/<int:id>', manager.get_project),

    # Admin
    path('departments', customadim.get_department)
]
