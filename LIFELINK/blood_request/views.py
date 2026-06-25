from django.shortcuts import render
from .models import BloodRequest

def request_list(request):
    requests = BloodRequest.objects.all()

    return render(
        request,'requestList.html',
        {'requests': requests})