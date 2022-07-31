from unicodedata import name
from django.urls import path,include
from django.contrib.auth.views import LoginView, LogoutView 
from django.contrib.auth.views import PasswordResetView
from django.contrib.auth.views import PasswordChangeView
from . import views

urlpatterns = [

    path('', views.homePage, name='home'),
    path('register', views.signup_page, name='register'),

    path('login', LoginView.as_view(
           template_name='base/login.html',
           redirect_authenticated_user=True),
        name='login'),
    path('logout', LogoutView.as_view(),name='logout'),
    path('password_change/', views.PasswordChangeView.as_view(), name="account_change_password"),

    ]