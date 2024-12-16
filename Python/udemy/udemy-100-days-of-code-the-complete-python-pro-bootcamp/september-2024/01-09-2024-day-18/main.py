# using the asterisk import everything from that module
import random
import turtle as t
from turtle import Screen

tim = t.Turtle()
t.colormode(255)

#Makes the arrow icon to a turtle icon
# joe.shape("turtle")

#Change the color of timmy to red
# joe.color("red")


# Draw square challenge 1:
# move_turtle = True
# while move_turtle:
#     turtle_direction = input('What direction you want to move it?: forward() / backward() / left() / right(): ')
#     turtle_steps = int(input('How many steps you want him to do?: '))
#     if turtle_direction != 'forward' and turtle_direction != 'backward' and turtle_direction != 'left' and turtle_direction != 'right':
#         print('Invalid direction, please type again! ')
#         turtle_direction = input('What direction you want to move it?: forward() / backward() / left() / right(): ')
#
#     elif turtle_direction == 'forward':
#         joe.forward(turtle_steps)
#
#     elif turtle_direction == 'backward':
#         joe.backward(turtle_steps)
#
#     elif turtle_direction == 'left':
#         joe.left(turtle_steps)
#
#     elif turtle_direction == 'right':
#         joe.right(turtle_steps)


# Draw a dashed line challenge 2:
# New turtle
# jim = Turtle()
# gap_count = 0
# for i in range(0,150):
#     gap_count += 1
#     # Move (teleport) the turtle to a specific position
#     jim.goto(i, 0)  # Teleport to x=50, y=0
#     if gap_count == 15:
#         gap_count = 0
#         # Lift the pen to avoid drawing
#         jim.penup()
#     else:
#         # Put the pen down to resume drawing
#         jim.pendown()


# Draw a triangle, square, pentagon, hexagon, heptagon, octagon , nonagon and decagon challenge 3:
# jim = Turtle()
# run_turtle = True
# degrees = 360
# while run_turtle:
#     ask_user = input('What shape would you like to draw?: ')
#     if ask_user == 'triangle':
#         for i in range(0,3):
#             jim.forward(120)
#             jim.right(120)
#
#     elif ask_user == 'square':
#         for i in range(0,4):
#             jim.forward(120)
#             jim.right(90)
#
#     elif ask_user == 'pentagon':
#         for i in range(0,5):
#             jim.forward(120)
#             jim.right(72)
#
#     elif ask_user == 'hexagon':
#         for i in range(0,6):
#             jim.forward(120)
#             jim.right(60)
#
#     elif ask_user == 'heptagon':
#         for i in range(0,7):
#             jim.forward(120)
#             jim.right(51.4285714)
#
#     elif ask_user == 'nonagon':
#         for i in range(0,9):
#             jim.forward(120)
#             jim.right(40)
#
#
#     elif ask_user == 'decagon':
#         for i in range(0, 10):
#             jim.forward(120)
#             jim.right(36)
#
#     else:
#         run_turtle = False

# Draw a random walk challenge 4:
# colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "brown"]
# for i in range(0,200):
#     random_color = colors[random.randint(0, len(colors) - 1)]
#     joe.color(random_color)
#     joe.speed(i)
#     if joe.speed == 10:
#         joe.speed(1)
#     for i in range(10,0, -1):
#         joe.pensize(i)
#         random_x = random.randint(0, 200)
#         random_y = random.randint(0, 200)
#         joe.goto(random_x,random_y)

# Another challenge completed...
# def random_color():
#     r = random.randint(0, 255)
#     g = random.randint(0, 255)
#     b = random.randint(0, 255)
#
#     my_rgb_tuple = (r,g,b)
#     return my_rgb_tuple
#
# directions = [0,90,180,270]
# for _ in range(200):
#     tim.color(random_color())
#     tim.forward(30)
#     tim.setheading(random.choice(directions))

# Draw a Spirograph challenge 5:
# def random_color():
#     r = random.randint(0, 255)
#     g = random.randint(0, 255)
#     b = random.randint(0, 255)
#
#     my_rgb_tuple = (r,g,b)
#     return my_rgb_tuple
#
# tim.speed("fastest")
# for _ in range(0,360,5):
#     tim.setheading(_)
#     tim.color(random_color())
#     tim.circle(100)


# Maintain the screen until I click in the area of that.
# screen = Screen()
# screen.exitonclick()
