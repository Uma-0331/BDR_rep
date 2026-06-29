from django.urls import path
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PatientViewSet
router = DefaultRouter()
router.register("api/patients", PatientViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add, name='add'),
    path('edit/<int:id>/', views.edit, name='edit'),
    path('delete/<int:id>/', views.delete, name='delete'),
     path("", include(router.urls)),
]