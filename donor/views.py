from django.shortcuts import render
from .models import Donor
def home(request):
    donors = Donor.objects.all()
    return render(request, 'home.html', {'donors': donors})
# Create your views here.
