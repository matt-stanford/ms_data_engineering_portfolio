from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get_project_details/<int:project_id>/', views.get_project_details, name='get_project_details')
]