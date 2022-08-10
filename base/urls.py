from unicodedata import name
from django.urls import path,include
from django.contrib.auth.views import LoginView, LogoutView 
from django.contrib.auth.views import PasswordResetView,PasswordChangeView
from . import views

urlpatterns = [

    path('', views.homePage, name='home'),

    #user registration, login, logout url
    path('register', views.signup_page, name='register'),
    path('login', LoginView.as_view(
           template_name='base/login.html',
           redirect_authenticated_user=True),
        name='login'),
    path('logout', LogoutView.as_view(),name='logout'),

    #password management url
        # password reset
    path('password_reset/', views.PasswordResetView.as_view(), name ='password_reset'), 
    path('reset_password_sent/', views.PriceJarPassWordResetDoneView.as_view(), name ='password_reset_done'),
        # password change
    path('password_change/', views.PasswordChangeView.as_view(), name="account_change_password"),
    path('accounts/password_change_done/',views.PriceJar_Password_Change_Done_View.as_view(),name="password_change_done"),
<<<<<<< HEAD
<<<<<<< HEAD

    path('deals/',views.DealsPageView, name='deals-page'),
    path('error404', views.error404, name='error404'),
    # user profile
    path('user_profile/', views.Userprofile, name ='userprofilepage'),
    path('contact/', views.contact, name='contact'), # contact url
=======
    path('deals/',views.DealsPageView, name='deals-page'),
    path('error404', views.error404, name='error404'),
    path('faq',views.faq, name='faq'),
    
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
] 
=======

    path('deals/',views.DealsPageView, name='deals-page'),
    path('error404', views.error404, name='error404'),
    path('faq',views.faq, name='faq'),
    # user profile
    path('user_profile/', views.Userprofile, name ='userprofilepage'),
    path('contact/', views.contact, name='contact'), # contact url
>>>>>>> own

    #About Us
    path('about/', views.About_Us_View.as_view())
] 
   
