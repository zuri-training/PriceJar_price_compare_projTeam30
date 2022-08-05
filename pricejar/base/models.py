import email
from pyexpat import model
from tkinter import CASCADE
from unicodedata import name
from django.db import models


# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name
