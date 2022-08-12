from django.db import models
from django.utils.translation import gettext as _

# Create your models here.
  
class JumiaMobilePhoneModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.CharField(_("Price"))

    def __str__(self):
        return self.product_name

class KillaMallMobilePhone(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.CharField(_("Price"))

    def __str__(self):
        return self.product_name


class JumiaFasionModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.CharField(_("Price"))

    def __str__(self):
        return self.product_name



class KillaMallFasionModel(models.Model):
    image= models.URLField(_("Image"))
    Link=models.CharField(_("Link"),max_length=300)
    product_name=models.CharField(_("Product_Name"), max_length=500)
    price=models.CharField(_("Price"))

    def __str__(self):
        return self.product_name