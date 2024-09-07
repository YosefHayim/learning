from turtle import Turtle

STARTING_POSITION = (0, -280)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280

class Player(Turtle):
    def __init__(self):
        super().__init__()
        self.screen.listen()
        self.setheading(90)
        self.penup()
        self.goto(STARTING_POSITION)
        self.color("black")
        self.shape("turtle")

    def go_up(self):
        self.screen.onkey(self.go_up, "Up")
        self.setheading(90)
        self.forward(10)

    def go_down(self):
        self.screen.onkey(self.go_down, "Down")
        self.backward(10)

    def go_right(self):
        self.screen.onkey(self.go_right, "Right")
        self.setx(self.xcor() + 10)

    def go_left(self):
        self.screen.onkey(self.go_left, "Left")
        self.setx(self.xcor() - 10)

    def reset_location(self):
        self.goto(STARTING_POSITION)

