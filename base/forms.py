
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

<<<<<<< HEAD
from django.forms import ModelForm
from .models import Contact


from django.forms import ModelForm
from .models import Contact


from django import forms
from django.forms import ModelForm
from .models import Contact
from crispy_forms.helper import FormHelper

=======
<<<<<<< HEAD
<<<<<<< HEAD
from django.forms import ModelForm
from .models import Contact

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
from django.forms import ModelForm
from .models import Contact

>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

class SignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        fields = ('username', 'email', 'first_name', 'last_name')


# model form for contact model
class ContactForm(forms.ModelForm):
    [...]
    def __init__(self,*args,**kwargs):
        super(ContactForm,self).__init__(*args,**kwargs)
        self.helper = FormHelper()
        self.helper.form_show_labels = False
    class Meta:
        model = Contact
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
        fields = '__all__'

        fields = ('username', 'email', 'first_name', 'last_name')
<<<<<<< HEAD

        fields = '__all__'

        fields = '__all__'
        widgets = {'firstname' :  forms.TextInput(attrs = {'type':'name','id':'loginName','placeholder':'Mawuli'}),
        'lastname' :   forms.TextInput(attrs = {'type':'name','id':'loginName','placeholder':'Owusu'}),
        'email'  : forms.TextInput(attrs = {'type':'email','id':'registerEmail','placeholder':'MawuliOwusu@gmail.com'}),
        'message' :  forms.Textarea(attrs = {'class':'form-control rounded-0','id':'exampleFormControlTextarea1','rows':'10','placeholder':'What would you like to tell us?'}),}
         
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        fields = '__all__'
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
