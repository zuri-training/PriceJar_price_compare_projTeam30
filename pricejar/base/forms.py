
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

from django.forms import ModelForm
from .models import Contact


class SignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = ('username', 'email', 'first_name', 'last_name')


# model form for contact model
class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'