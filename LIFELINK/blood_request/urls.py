from django.urls import path
from . import views

urlpatterns = [
    path("requestblood/", views.request_blood, name="request_blood"),
    path("match-dashboard/", views.match_dashboard, name="match_dashboard"),
     path("approve/<int:id>/", views.approve_request, name="approve_request"),
    path("reject/<int:id>/", views.reject_request, name="reject_request"),
]