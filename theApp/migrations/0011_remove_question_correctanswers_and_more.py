# Generated by Django 5.1.7 on 2025-04-01 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theApp', '0010_alter_question_correctanswers_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='correctAnswers',
        ),
        migrations.AlterField(
            model_name='question',
            name='correct_answer',
            field=models.CharField(max_length=100),
        ),
    ]
