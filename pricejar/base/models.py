from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User



# Create your models here.

# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default='default.jpg', upload_to='profile_images')
    bio = models.TextField()

    def __str__(self):
        return self.user.username

#Product model start here
class Product(models.Model):
    name= models.CharField(max_length=400)
    description = models.TextField(null=True)
    avatar = models.ImageField(default='default.jpg', upload_to='profile_images')
    updated = models.DateTimeField(auto_now= True)
    created = models.DateTimeField(auto_now_add= True)

    #ordering products from most recent updated/created to least updated
    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name
    