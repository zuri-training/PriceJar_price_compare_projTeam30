
from email.mime import base
from os import terminal_size

from django.shortcuts import render
from django.contrib.auth.views import PasswordResetView,PasswordChangeDoneView,PasswordChangeView,PasswordResetDoneView
from django. contrib.auth.forms import PasswordResetForm,PasswordChangeForm
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.contrib.auth import login
# from .models import Product
from . import forms
from .forms import ContactForm

from django.views.generic import TemplateView


#homepage view
def homePage(request):
     #--search logic
    #querying the database 
    # q = request.GET.get('q') if request.GET.get('q') != None else ''

    # products = Product.objects.filter(
    #     Q(name__icontains = q) |
    #     Q(description__icontains = q)
    #     )

    #  #--end of search logic
    # context = {"products":products}
    return render(request, 'base/home.html')
#end of homepage view

#user registration functionality
def signup_page(request):
    form = forms.SignupForm()

    if request.method == 'POST':
        form = forms.SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            # auto-login user
            login(request, user)
            return redirect(settings.LOGIN_REDIRECT_URL)
        else:
            messages.error(request, 'An error occurred during regestration, please try again')
    return render(request, 'base/register.html', context={'form': form})
#end of user registration functionality

 #PasswordChangeView
class Password_Change_View(PasswordChangeView):
    Form_class = PasswordChangeForm
    success_url = reverse_lazy('PasswordChangeView')
    template_name = 'registration/password_change_form.html'
    title = gettext_lazy('password change')
    #end of PasswordChangeView
 

#PasswordResetView
class Password_Reset_View(PasswordResetView):
    Form_class = PasswordResetForm
    template_name = "base/password_reset.html"
#end of PasswordResetView


#password_change_done_view
class PriceJar_Password_Change_Done_View(PasswordChangeDoneView):
    template_name = "password_change_done.html"
    title = "Password Change Done Successfully"
#end of password_change_done_view


#password__reset_done_view
class PriceJarPassWordResetDoneView(PasswordResetDoneView):
    template_name = "password_reset_sent.html"

# class DealsPageView(View):
#     template_name= "templates/deals.html"

def DealsPageView(request):
    return render(request, 'base/deals.html',)

#start of error 404 view
def error404(request):
    return render(request, 'base/error404.html')
#end of error 404 view

# start of user profile    
@login_required
def Userprofile(request):
    return render(request, 'base/userprofilepage.html')
# end of user profile

# Contact
def contact(request):
    context = {}
    context['form'] = ContactForm
    return render(request, 'base/contact.html', context)

class About_Us_View(TemplateView):
    template_name = "base/about.html"

#faq
def faq(request):
    return render(request,'base/faq.html')
