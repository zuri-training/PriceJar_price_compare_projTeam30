from django.contrib import admin
from .models import UserProfile
from .models import Contact
# Register your models here.


# Register UserProfile
admin.site.register(UserProfile)

# Register Contact
admin.site.register(Contact)