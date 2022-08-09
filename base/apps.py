from django.apps import AppConfig


class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'
<<<<<<< HEAD

class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'user'

    # corrected import error
    def ready(self):
        import base.signals
=======
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
