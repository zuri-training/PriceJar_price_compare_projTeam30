from django.contrib import admin
from .models import JumiaMobilePhoneModel
from .models import KillaMallMobilePhone
from .models import JumiaFasionModel
from .models import KillaMallFasionModel
from .models import ShopitMobilePhone


# Register your models here.

admin.site.register(JumiaMobilePhoneModel)
admin.site.register(KillaMallMobilePhone)
admin.site.register(ShopitMobilePhone)
admin.site.register(JumiaFasionModel)
admin.site.register(KillaMallFasionModel)
