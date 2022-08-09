
from os import terminal_size
from django.shortcuts import render
from django.contrib.auth.views import PasswordResetView,PasswordChangeDoneView,PasswordChangeView,PasswordResetDoneView
from django. contrib.auth.forms import PasswordResetForm,PasswordChangeForm
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy
<<<<<<< HEAD
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import HttpResponse
from django.db.models import Q
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.contrib.auth import login
from django.views import View
# from .models import Product
from . import forms
from .forms import ContactForm

=======
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth import login
from django.views import View
from . import forms
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9



#homepage view
def homePage(request):
<<<<<<< HEAD
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
=======
    return render(request, 'base/home.html')
#end of homepage view


#user registration functionality
def signup_page(request):
    form = forms.SignupForm()
    if request.method == 'POST':
        form = forms.SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            # auto-login user
            login(request, user)
            return redirect(settings.LOGIN_REDIRECT_URL)
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
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
<<<<<<< HEAD
    Form_class = PasswordResetForm
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    template_name = "password_reset.html"
#end of PasswordResetView


#password_change_done_view
class PriceJar_Password_Change_Done_View(PasswordChangeDoneView):
    template_name = "password_change_done.html"
    title = "Password Change Done Successfully"
#end of password_change_done_view

<<<<<<< HEAD

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
#password__reset_done_view
class PriceJarPassWordResetDoneView(PasswordResetDoneView):
    template_name = "password_reset_sent.html"

# class DealsPageView(View):
#     template_name= "templates/deals.html"

def DealsPageView(request):
    return render(request, 'base/deals.html',)
<<<<<<< HEAD

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
#start of error 404 view
def error404(request):
    return render(request, 'base/error404.html')
#end of error 404 view
<<<<<<< HEAD

# start of user profile    
@login_required
def Userprofile(request):
    return render(request, 'base/userprofilepage.html')
# end of user profile

# Contact
def contact(request):
    
    if request.method == "POST":
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            messages.add_message(request, messages.INFO, 'Your contact information and message were successfully submitted.')

    form = ContactForm()
    context = {'form': form}
    return render(request, 'base/contact.html', context)
# End
=======
    
#start of faq view
def faq(request):
    return render(request, 'base/faq.html')
#end of faq view
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9

