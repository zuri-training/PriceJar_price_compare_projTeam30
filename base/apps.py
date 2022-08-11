from django.apps import AppConfig


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10

class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user'

    # corrected import error
    def ready(self):
        import base.signals
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
>>>>>>> c5ab4a06a17bd4d9225d92c62369f8da586c1a10
