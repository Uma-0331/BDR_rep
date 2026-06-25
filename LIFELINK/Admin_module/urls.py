
from . import views
from django.urls import path

urlpatterns = [
    path('adminmodule-list/', views.Display, name='adminmodule-list'),
    path('addAdmin/', views.addAdmin, name='addAdmin'),
    path('insertAdmin/', views.insertAdmin, name='insertAdmin'),
    path('editAdmin/<int:id>/', views.editAdmin, name='editAdmin'),
    path('updateAdmin/<int:id>/', views.updateAdmin, name='updateAdmin'),
    path('deleteAdmin/<int:id>/', views.deleteAdmin, name='deleteAdmin'),

]