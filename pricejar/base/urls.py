from unicodedata import name
from django.urls import path,include
from django.contrib.auth.views import LoginView, LogoutView 
from django.contrib.auth.views import PasswordResetView
from . import views

urlpatterns = [

    path('', views.homePage, name='home'),
    path('register', views.signup_page, name='register'),

    path('login', LoginView.as_view(
           template_name='base/login.html',
           redirect_authenticated_user=True),
        name='login'),
    path('logout', LogoutView.as_view(),name='logout'),
    path('accounts/password_reset/',views.PasswordResetView.as_view(),name='password_reset'),

    ]