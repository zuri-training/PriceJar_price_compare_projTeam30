
from os import terminal_size
from django.shortcuts import render
from django.contrib.auth.views import PasswordResetView,PasswordChangeDoneView
from django. contrib.auth.forms import PasswordResetForm
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth import login
from . import forms



#homepage view
def homePage(request):
    return render(request, 'base/home.html')
#end of homepage view


#user regestration functionality
def signup_page(request):
    form = forms.SignupForm()
    if request.method == 'POST':
        form = forms.SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            # auto-login user
            login(request, user)
            return redirect(settings.LOGIN_REDIRECT_URL)
    return render(request, 'base/register.html', context={'form': form})
#end of user regestration functionality


#PasswordResetView
class Password_Reset_View(PasswordResetView):
    template_name = "password_reset.html"
#end of PasswordResetView


#password_change_done_view
class PriceJar_Password_Change_Done_View(PasswordChangeDoneView):
    template_name = "password_change_done.html"
    title = "Password Change Done Successfully"
#end of password_change_done_view



#start of error 404 view
def error404(request):
    return render(request, 'base/error404.html')
#end of error 404 view