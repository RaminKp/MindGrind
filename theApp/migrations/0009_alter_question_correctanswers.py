# Generated by Django 5.1.7 on 2025-04-01 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theApp', '0008_alter_question_correctanswers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='correctAnswers',
            field=models.JSONField(default=''),
        ),
    ]
