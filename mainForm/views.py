from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_protect
import csv

# Create your views here.
@csrf_protect
def index(request):
    if request.method == "GET":
        return render(request, "mainForm/index.html")
    
    elif request.method == "POST":
        # Get the form data
        email = request.POST.get("emailInput")
        phoneNumber = request.POST.get("phoneNumber")
        mango_3eweasy = request.POST.get("mango_3eweasy")
        mango_fas = request.POST.get("mango_fas")
        mango_sedekah = request.POST.get("mango_sedekah")
        
        # Send email to owners
        send_mail(
            subject='A new order has been placed!',
            message=f'A new order has been placed!\n\nEmail: {email}\nPhone Number: {phoneNumber}\nMango 3eweasy: {mango_3eweasy}\nMango fas: {mango_fas}\nMango sedekah: {mango_sedekah}',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.RECIPIENT_ADDRESS1, settings.RECIPIENT_ADDRESS2],
        )
        
        # Send email to customer
        send_mail(
            subject='شكرا لطلبك!',
            message=f':لقد طلبت\n' + f'مانجو عويسي {mango_3eweasy}\n' + f'مانجو فص {mango_fas}\n' + f'مانجو صديقة {mango_sedekah}\n',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
        )
        
        # add data to csv file, on a new line, with the format: email, phone number, mango 3eweasy, mango fas, mango sedekah
        with open('./mainForm/static/data.csv', 'a') as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow([email, phoneNumber, mango_3eweasy, mango_fas, mango_sedekah])
        
        return render(request, "mainForm/success.html")