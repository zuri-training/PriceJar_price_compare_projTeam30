from django.apps import AppConfig


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4

class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user'

    # corrected import error
    def ready(self):
        import base.signals
<<<<<<< HEAD
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
