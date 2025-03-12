from django.db import models

# Create your models here.

class questions(models.Model):
  question = models.CharField(max_length=250)


class playerScore(models.Model):
  name = models.CharField(max_length=50)
  score = models.IntegerField()

def  __str__(self):
  return f"Name: {self.name} Score: {self.score}"
