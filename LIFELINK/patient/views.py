from django.shortcuts import render, redirect, get_object_or_404
from .models import Patient

def home(request):
    patients = Patient.objects.all()
    return render(request, 'patient_list.html', {'patients': patients})


def add(request):
    if request.method == 'POST':
        Patient.objects.create(
            patient_id=request.POST['patient_id'],
            patient_name=request.POST['patient_name'],
            age=request.POST['age'],
            gender=request.POST['gender'],
            blood_group=request.POST['blood_group'],
            phone=request.POST['phone']
        )
        return redirect('home')

    return render(request, 'add_patient.html')


def edit(request, id):
    patient = get_object_or_404(Patient, id=id)

    if request.method == 'POST':
        patient.patient_id = request.POST['patient_id']
        patient.patient_name = request.POST['patient_name']
        patient.age = request.POST['age']
        patient.gender = request.POST['gender']
        patient.blood_group = request.POST['blood_group']
        patient.phone = request.POST['phone']
        patient.save()

        return redirect('home')

    return render(request, 'edit_patient.html', {'patient': patient})


def delete(request, id):
    patient = get_object_or_404(Patient, id=id)

    if request.method == 'POST':
        patient.delete()
        return redirect('home')

    return render(request, 'delete_patient.html', {'patient': patient})