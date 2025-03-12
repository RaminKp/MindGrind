from django.contrib import admin
from .models import questions
from .models import playerScore

# Register your models here.
admin.site.register(questions)
admin.site.register(playerScore)