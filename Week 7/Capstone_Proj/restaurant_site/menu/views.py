from django.shortcuts import render

def home(request):
    return render(request, 'home.html')
def info(request):
    return render(request, 'info.html')
def catering(request):
    return render(request, 'catering.html')
def menu(request):
    return render(request, 'menu.html')
