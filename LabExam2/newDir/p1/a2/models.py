from django.db import models

# Create your models here.

class members(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    zip = models.CharField(max  = 10)


class Test(models.Model):
    name = models.CharField(max_length= 100)
    
    
    
from members.models import members

test = members(name ="test", city="test")
test.save() 
 