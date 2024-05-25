#  Create the code for creating a class having five attributes that can be used for creating a table in the SQLite database and write the required code for inserting and displaying a new record in the table Shell commands only).

from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=200)
    roll = models.IntegerField()
    age = models.IntegerField()
    city = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
    
# Path: LabExam2/newTest/a2/views.py
# Create the code for inserting and displaying a new record in the table (Shell commands only).

from django.shortcuts import render
from .models import Student

# Create your views here.   

def insert(request):
    s = Student(name="Raj", roll=101, age=20, city="Kathmandu")
    s.save()
    return render(request, 'a2/insert.html')

def display(request):
    data = Student.objects.all()
    return render(request, 'a2/display.html', {'data':data})

# Path: LabExam2/newTest/a2/urls.py

from django.urls import path
from . import views
