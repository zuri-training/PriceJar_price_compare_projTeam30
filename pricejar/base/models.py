
import email
from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

# Create your models here.


# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    # Retty work on the below error too
#     ERRORS:
# base.UserProfile.avatar: (fields.E210) Cannot use ImageField because Pillow is not installed.
#         HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".

    #ordering products from most recent updated/created to least updated


    def __str__(self):
        return self.name
        
# validator function

def validate_name(value):
    if value.isalpha():
        return value
    else:
        raise ValidationError("This field must contain alphabets only")

def validate_email(value):
    if "@gmail.com" in value:
        return value
    else:
        raise ValidationError("This field only accepts gmail id")


# contact model
class Contact(models.Model):
    firstname = models.CharField(max_length=50, default="", validators=[validate_name])
    lastname = models.CharField(max_length=50, default="", validators=[validate_name])
    email = models.EmailField(max_length=150, validators=[validate_email])
    message = models.TextField()

    def __str__(self):
        return self.email


