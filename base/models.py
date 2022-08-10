

import email

from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User

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
        
# contact model
class Contact(models.Model):
    firstname = models.CharField(max_length=50, default="")
    lastname = models.CharField(max_length=50, default="")
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email




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
    
    # Retty work on the below error too
#     ERRORS:
# base.UserProfile.avatar: (fields.E210) Cannot use ImageField because Pillow is not installed.
#         HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".

    #ordering products from most recent updated/created to least updated


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



