# Generated by Django 5.1.7 on 2025-03-12 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theApp', '0002_playerscore_delete_score'),
    ]

    operations = [
        migrations.CreateModel(
            name='questions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=250)),
            ],
        ),
    ]
