# Generated by Django 4.0.6 on 2022-08-13 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0003_jumiafasionmodel_killamallfasionmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShopitMobilePhoneModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.URLField(verbose_name='Image')),
                ('product_name', models.CharField(max_length=500, verbose_name='Product_Name')),
                ('price', models.IntegerField(verbose_name='Price')),
                ('Link', models.CharField(max_length=300, verbose_name='Link')),
            ],
        ),
    ]
