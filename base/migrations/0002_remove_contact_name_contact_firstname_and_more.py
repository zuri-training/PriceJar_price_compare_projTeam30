# Generated by Django 4.0.6 on 2022-08-09 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='name',
        ),
        migrations.AddField(
            model_name='contact',
            name='firstname',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='contact',
            name='lastname',
            field=models.CharField(default='', max_length=50),
        ),
    ]
