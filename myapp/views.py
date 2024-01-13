from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'index.html')

def signup(request):
    return render(request, 'signup.html')

@login_required
def home(request):
    return render(request, 'home.html')