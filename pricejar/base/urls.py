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
    path('deals/',views.DealsPageView, name='deals-page'),
    path('error404', views.error404, name='error404'),
] 


