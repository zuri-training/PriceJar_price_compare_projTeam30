
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

<<<<<<< HEAD
<<<<<<< HEAD
from django.forms import ModelForm
from .models import Contact

=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
from django.forms import ModelForm
from .models import Contact

>>>>>>> own

class SignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> own
        fields = ('username', 'email', 'first_name', 'last_name')


# model form for contact model
class ContactForm(ModelForm):
    class Meta:
        model = Contact
<<<<<<< HEAD
        fields = '__all__'
=======
        fields = ('username', 'email', 'first_name', 'last_name')
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
        fields = '__all__'
>>>>>>> own
