
import email
# from pyexpat import model
# from tkinter import CASCADE
# from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
from scraper.models import JumiaMobilePhoneModel, ShopitMobilePhoneModel

# Create your models here.


# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
        
# contact model
class Contact(models.Model):
    firstname = models.CharField(max_length=50, default="")
    lastname = models.CharField(max_length=50, default="")
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(ShopitMobilePhoneModel, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now= True)
    created = models.DateTimeField(auto_now_add= True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:50]


