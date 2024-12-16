import random
from turtle import Turtle, Screen
screen = Screen()
screen.setup(width=500,height=400)
is_race_on = False
user_bet = screen.textinput(title='Make your bet',prompt='Which turtle will win the race? Enter a color: ')
print(user_bet)
turtle_colors = ["red","yellow","green","brown","blue","purple"]
all_turtles = []

x = -230
y = -30
for i in turtle_colors:
    new_turtle = Turtle('turtle')
    new_turtle.penup()
    new_turtle.color(i)
    new_turtle.goto(x=x,y=y)
    all_turtles.append(new_turtle)
    y += 30

if user_bet:
    is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        if turtle.xcor() > 230:
            is_race_on = False
            winning_color = turtle.pencolor()
            if winning_color == user_bet:
                print(f'You won! the winner is {winning_color} turtle is the winner!')
            else:
                print(f'You have lost! the winner is {winning_color} turtle is the winner!')
        random_distance = random.randint(0,10)
        turtle.forward(random_distance)









screen.exitonclick()