class Question:
                    # Adding these arguments inside the method (function in other words) will allow me to have a dynamic uses with it when I call that method object.
    def __init__(self,q_text ,q_answer):
        # These are attributes because the __init__ is a method inside the object called question.
        self.text = q_text
        self.answer = q_answer

