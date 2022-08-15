from django.contrib import admin
from .models import Contact, Comment, UserProfile
# Register your models here.


admin.site.register(UserProfile)
admin.site.register(Contact)
admin.site.register(Comment)