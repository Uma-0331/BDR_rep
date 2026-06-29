from django.shortcuts import render, redirect, get_object_or_404
from .models import BloodRequest
from donor.models import Donor
from .utils import find_matching_donors
from .utils import clean_blood_group
from rest_framework import viewsets
from .serializers import BloodRequestSerializer
from patient.models import Patient

# blood_request/views.py




def request_blood(request):
    if request.method == "POST":
        BloodRequest.objects.create(
            patient_name=request.POST["patient_name"],
            blood_group=request.POST["blood_group"],
            units_required=request.POST["units_required"],
            city=request.POST["city"],
        )
        return redirect("match_dashboard")

    return render(request, "requestForm.html")


def match_dashboard(request):

    requests = BloodRequest.objects.filter(status="Pending")

    data = []

    for req in requests:

        donors = find_matching_donors(req.blood_group, req.city)

        data.append({
            "patient": req,
            "donors": donors
        })

    return render(request, "matchedDashboard.html", {"data": data})
def approve_request(request, id):
    req = get_object_or_404(BloodRequest, id=id)
    req.status = "Approved"
    req.save()
    return redirect("match_dashboard")


def reject_request(request, id):
    req = get_object_or_404(BloodRequest, id=id)
    req.status = "Rejected"
    req.save()
    return redirect("match_dashboard")
class BloodRequestViewSet(viewsets.ModelViewSet):
    queryset = BloodRequest.objects.all()
    serializer_class = BloodRequestSerializer

    def perform_create(self, serializer):
        blood_request = serializer.save()

        # Create a Patient record automatically
        Patient.objects.create(
            patient_name=blood_request.patient_name,
            blood_group=blood_request.blood_group,
            phone="",                 # Request form doesn't collect phone for Patient yet
            hospital="",              # Will be blank
            city=blood_request.city,
            age=None,
            gender=""
        )