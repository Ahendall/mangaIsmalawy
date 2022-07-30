from django.urls import path
from . import views

app_name = "mainForm"
urlpatterns = [
    path("", views.index, name="index"),
]
