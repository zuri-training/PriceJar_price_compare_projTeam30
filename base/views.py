
from email.mime import base
from os import terminal_size
from re import template

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.views import PasswordResetView,PasswordChangeDoneView,PasswordChangeView,PasswordResetDoneView
from django. contrib.auth.forms import PasswordResetForm,PasswordChangeForm
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.conf import settings
from django.contrib.auth import login
from .forms import ContactForm
from django.views.generic import TemplateView
from .models import Comment, ShopitMobilePhoneModel 


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
@login_required 
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

 #documentation1
def documentation1(request):
    return render(request,'base/documentation1.html')
    

#documentation2
def documentation2(request):
    return render(request,'base/documentation2.html')


# single product view
@login_required 
def product_view(request, pk):
    product = ShopitMobilePhoneModel.objects.get(id=pk)
    #gettig all comments belong to a specific product. product.comment_set.all() => product is the specific product
    #message is the child class were are querying
    comments = product.comment_set.all().order_by('-created')
    if request.method == 'POST':
        comments = Comment.objects.create(
            user= request.user,
            product=product,
            body=request.POST.get('comment')
        )
        
        #redirect to have it back to a 'get' request
        return redirect('product', pk=product.id)

    context= {'comments':comments, 'product':product}
    return render(request,'base/product.html', context)
# end of single product view   
 

#start of categories view
@login_required 
def categories_view(request):
    return render(request,'base/categories.html')   
#end of categories view
