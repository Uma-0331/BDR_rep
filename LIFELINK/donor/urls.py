from django.urls import path
from .views import (
    DonorListCreateAPIView,
    DonorRetrieveUpdateDestroyAPIView,
)

urlpatterns = [
    path("api/donors/", DonorListCreateAPIView.as_view(), name="donor-list"),
    path("api/donors/<int:pk>/", DonorRetrieveUpdateDestroyAPIView.as_view(), name="donor-detail"),
]