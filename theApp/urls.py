from django.urls import path
from . import views

urlpatterns = [
    path("", views.start_game, name='start_game'),
    path('reset_game/', views.reset_game, name='reset_game'),
]