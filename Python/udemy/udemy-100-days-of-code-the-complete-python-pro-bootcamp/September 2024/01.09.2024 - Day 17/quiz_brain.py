class QuizBrain:
    # This restart and reset the values, initialize the attributes question_number and question_list, this will execute each time I run method in the object of the quizz brain.
    def __init__(self,q_list):
        self.question_number = 0
        self.user_score = 0
        self.question_list = q_list

    def still_has_questions(self):
        # This method checks if there are more questions
        return self.question_number < len(self.question_list)

    def next_question(self):
        current_question = self.question_list[self.question_number]
        self.question_number += 1
        user_answer = input(f'Q.{self.question_number}: {current_question.text} True/False: ')
        self.check_answer(user_answer, current_question.answer)

    def check_answer(self, user_answer, correct_answer):
        if user_answer.lower() == correct_answer.lower():
            self.user_score += 1
            print('You got it right!')
        else:
            print("That's wrong")
            print('\n')
