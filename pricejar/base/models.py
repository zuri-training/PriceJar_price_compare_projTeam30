from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User



# Create your models here.
class Jumia(model.Model):
    pass

# User profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    # Retty work on the below error too
#     ERRORS:
# base.UserProfile.avatar: (fields.E210) Cannot use ImageField because Pillow is not installed.
#         HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".

    # avatar = models.ImageField(default='default.jpg', upload_to='profile_images')
    bio = models.TextField()

    def __str__(self):
        return self.user.username
