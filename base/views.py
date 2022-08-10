
from os import terminal_size
from django.shortcuts import render
from django.contrib.auth.views import PasswordResetView,PasswordChangeDoneView,PasswordChangeView,PasswordResetDoneView
from django. contrib.auth.forms import PasswordResetForm,PasswordChangeForm
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy
<<<<<<< HEAD
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
=======
from django.contrib.auth.decorators import login_required
from django.contrib import messages
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
from django.http import HttpResponse
from django.db.models import Q
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.contrib.auth import login
from django.views import View
# from .models import Product
from . import forms
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
from .forms import ContactForm

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4



#homepage view
def homePage(request):
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
     #--search logic
    #querying the database 
    # q = request.GET.get('q') if request.GET.get('q') != None else ''

    # products = Product.objects.filter(
    #     Q(name__icontains = q) |
    #     Q(description__icontains = q)
    #     )

    #  #--end of search logic
    # context = {"products":products}
<<<<<<< HEAD
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
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
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
<<<<<<< HEAD
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        else:
            messages.error(request, 'An error occurred during regestration, please try again')
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
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
<<<<<<< HEAD
    Form_class = PasswordResetForm
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
    template_name = "password_reset.html"
=======
    Form_class = PasswordResetForm
    template_name = "base/password_reset.html"
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
#end of PasswordResetView


#password_change_done_view
class PriceJar_Password_Change_Done_View(PasswordChangeDoneView):
    template_name = "password_change_done.html"
    title = "Password Change Done Successfully"
#end of password_change_done_view

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
#password__reset_done_view
class PriceJarPassWordResetDoneView(PasswordResetDoneView):
    template_name = "password_reset_sent.html"

# class DealsPageView(View):
#     template_name= "templates/deals.html"

def DealsPageView(request):
    return render(request, 'base/deals.html',)
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
#start of error 404 view
def error404(request):
    return render(request, 'base/error404.html')
#end of error 404 view
<<<<<<< HEAD
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
    
=======

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
#start of faq view
def faq(request):
    return render(request, 'base/faq.html')
#end of faq view
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9

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

