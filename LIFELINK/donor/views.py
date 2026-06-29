from rest_framework import generics
from .models import Donor
from .serializers import DonorSerializer


class DonorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer


class DonorRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer