
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.forms import ModelForm
from .models import Contact


class SignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = ('username', 'email', 'first_name', 'last_name')


# model form for contact model
class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'
        widgets = {'firstname' :  forms.TextInput(attrs = {'type':'name','id':'loginName','placeholder':'Mawuli'}),
        'lastname' :   forms.TextInput(attrs = {'type':'name','id':'loginName','placeholder':'Owusu'}),
        'email'  : forms.TextInput(attrs = {'type':'email','id':'registerEmail','placeholder':'MawuliOwusu@gmail.com'}),
        'message' :  forms.Textarea(attrs = {'class':'form-control rounded-0','id':'exampleFormControlTextarea1','rows':'10','placeholder':'What would you like to tell us?'}),}
        