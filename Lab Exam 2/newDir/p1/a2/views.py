from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# Create your views here.
def home(request):
    return render (request, 'home.html')
def gotoaddpage(request):
    return render (request, 'a.html')
def add(request):
    x = int(request.POST['n1'])
    y = int(request.POST['n2'])
    ans = x + y
    return render (request, "R.html", {'res':ans})