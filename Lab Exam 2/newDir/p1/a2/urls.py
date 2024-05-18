from django.urls import include, path
from . import views
urlpatterns=[
path('', views.home, name='home'),
path("gotoaddpage", views.gotoaddpage, name="gotoaddpage"), path('add', views.add, name='add'),
]