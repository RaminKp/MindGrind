from django.db import models

# Create your models here.

class Question(models.Model):
  text = models.CharField(max_length=300)
  correct_answer = models.CharField(max_length=100)
  incorrect_answers = models.JSONField()  # Store multiple incorrect answers
  category = models.CharField(max_length=100, blank=True, null=True)
  difficulty = models.CharField(max_length=50, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.text


class playerScore(models.Model):
  name = models.CharField(max_length=50)
  score = models.IntegerField()

def  __str__(self):
  return f"Name: {self.name} Score: {self.score}"
