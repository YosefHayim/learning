from question_model import Question
from data import question_data
from quiz_brain import QuizBrain

question_bank = []

# Running a loop that gets all the text and answer from the question_data list dictionary
for i in question_data:
    question_text = i["question"]
    question_answer = i["correct_answer"]
    # Each time that we have text and answer we create an object that is being added to the class of question since it's a new question and answer each time.
    new_question = Question(question_text, question_answer)
    # Appending each of these new questions to the current question_bank that is in this file.
    question_bank.append(new_question)

quiz = QuizBrain(question_bank)
while quiz.still_has_questions():
    quiz.next_question()
print(f'Youve completed the quiz, Your final score was: {quiz.user_score}/{quiz.question_number}')