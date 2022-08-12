
import email
# from pyexpat import model
# from tkinter import CASCADE
# from unicodedata import name
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default='default.jpg', upload_to='profile_images')
    bio = models.CharField(max_length=500, default="")
    newEmail = models.EmailField(default="")
    newPassword = models.CharField(max_length=15, default="")

    def __str__(self):
        return self.user

    #ordering products from most recent updated/created to least updated
        
# contact model
class Contact(models.Model):
    firstname = models.CharField(max_length=50, default="")
    lastname = models.CharField(max_length=50, default="")
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email


