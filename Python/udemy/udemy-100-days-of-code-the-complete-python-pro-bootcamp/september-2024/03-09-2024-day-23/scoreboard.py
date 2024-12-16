from turtle import Turtle

FONT = ("Courier", 18, "normal")

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.penup()
        self.hideturtle()
        self.goto(-220,250)
        self.score = 1
        self.color("black")
        self.write(f"Level: {self.score}",align="center",font=FONT)

    def reached_end(self):
        self.clear()
        self.score += 1
        self.write(f"Level: {self.score}",align="center",font=FONT)


