from django.shortcuts import render, redirect
from .models import AdminModule


def Display(request):
    admins = AdminModule.objects.all()
    return render(request, 'adminmodule-list.html', {'admins': admins})


def addAdmin(request):
    return render(request, 'addAdmin.html')


def insertAdmin(request):
    if request.method == "POST":
        aid = request.POST.get('admin_id')
        aname = request.POST.get('admin_name')
        aemail = request.POST.get('admin_email')
        aphone = request.POST.get('admin_phone')

        admin = AdminModule(
            admin_id=aid,
            admin_name=aname,
            admin_email=aemail,
            admin_phone=aphone
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
        admin.admin_email = request.POST.get('admin_email')
        admin.admin_phone = request.POST.get('admin_phone')

        admin.save()

    return redirect('/adminmodule/adminmodule-list/')


def deleteAdmin(request, id):
    admin = AdminModule.objects.get(id=id)
    admin.delete()

    return redirect('/adminmodule/adminmodule-list')
    
