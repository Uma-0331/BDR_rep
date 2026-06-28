from django.shortcuts import render, redirect
from .models import AdminModule
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


def Display(request):
    admins = AdminModule.objects.all()
    return render(request, 'adminmodule-list.html', {'admins': admins})


def addAdmin(request):
    return render(request, 'addAdmin.html')


def insertAdmin(request):
    if request.method == "POST":
        aid = request.POST.get('admin_id')
        aname = request.POST.get('admin_name')
        hname = request.POST.get('hospital_name')
        dept = request.POST.get('department')
        aemail = request.POST.get('admin_email')
        aphone = request.POST.get('admin_phone')
        status = request.POST.get('status')

        admin = AdminModule(
            admin_id=aid,
            admin_name=aname,
            hospital_name=hname,
            department=dept,
            admin_email=aemail,
            admin_phone=aphone,
            status=status
        )
        admin.save()

    return redirect('/adminmodule/adminmodule-list/')


def editAdmin(request, id):
    admin = AdminModule.objects.get(id=id)
    return render(request, 'updateadmin.html', {'admin': admin})


def updateAdmin(request, id):
    admin = AdminModule.objects.get(id=id)

    if request.method == "POST":
        admin.admin_id = request.POST.get('admin_id')
        admin.admin_name = request.POST.get('admin_name')
        admin.hospital_name = request.POST.get('hospital_name')
        admin.department = request.POST.get('department')
        admin.admin_email = request.POST.get('admin_email')
        admin.admin_phone = request.POST.get('admin_phone')
        admin.status = request.POST.get('status')

        admin.save()

    return redirect('/adminmodule/adminmodule-list/')

def deleteAdmin(request, id):
    admin = AdminModule.objects.get(id=id)
    admin.delete()

    return redirect('/adminmodule/adminmodule-list')

def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')   # change to your dashboard
        else:
            messages.error(request, "Invalid username or password")

    return render(request, 'login.html')


def logout_view(request):
    logout(request)
    return redirect('login')
    
