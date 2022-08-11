<<<<<<< HEAD


import email

=======
<<<<<<< HEAD
<<<<<<< HEAD

import email
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======

import email
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
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
<<<<<<< HEAD

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
from django.contrib.auth.models import User

# Create your models here.
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10


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
<<<<<<< HEAD
    firstname = models.CharField(max_length=50, default="")
    lastname = models.CharField(max_length=50, default="")
=======
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email


<<<<<<< HEAD

=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
