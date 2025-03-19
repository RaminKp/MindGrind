from django.shortcuts import render, get_object_or_404, redirect
from .models import Question

# Create your views here.
def helloWorld(request):
  return render (request, 'index.html', context={
  })


def fetch_trivia_questions():
  url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
  response = requests.get(url)
  
  if response.status_code == 200:
    data = response.json()
    for item in data.get('results', []):
        Question.objects.update_or_create(
            text=item['question'],
            defaults={
                'correct_answer': item['correct_answer'],
                'incorrect_answers': item['incorrect_answers'],
                'category': item['category'],
                'difficulty': item['difficulty'],
            }
        )


def start_game(request):

  #teporary solution to reload problem
  if 'is_answer' not in request.session:
    request.session['is_answer'] = False


  # Reset the session when the game starts
  if 'current_question_index' not in request.session:
    request.session['current_question_index'] = 0

  # Get the current question index from session (or start at 0)
  current_index = request.session.get('current_question_index', 0)
  
  # Fetch all questions
  questions = Question.objects.all()

  if current_index < len(questions):
      current_question = questions[current_index]
      feedback = None # To hold feedback about the answer
  else:
      # Game over logic
      return render(request, 'game_over.html')

  # Handle the "Next" button click
  if request.session['is_answer'] == True:
      selected_answer = request.POST.get('answer')
      # Check if the answer is correct
      if selected_answer == current_question.correct_answer:
        feedback = "✅ Correct!"
      else:
        feedback = f"❌ Incorrect! The correct answer was:{current_question.correct_answer}"

      # Move to the next question only after displaying feedback
      request.session['current_question_index'] = current_index + 1
      
      #ensure that next time the page loads it will load a question page
      request.session['is_answer'] = False

  else:
     request.session['is_answer'] = True

  return render(request, 'index.html', {'question': current_question, 'feedback': feedback})

def reset_game(request):
  # Clear the session to restart the game
  request.session['current_question_index'] = 0
  return redirect('start_game')

