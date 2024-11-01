import random
import turtle

import colorgram
from turtle import *

# # Extract 6 colors from an image.
# colors = colorgram.extract('image.jpg', 34)
#
# rgb_colors = []
# for color in colors:
#     r = color.rgb.r
#     g = color.rgb.g
#     b = color.rgb.b
#     new_color = (r, g, b)
#     rgb_colors.append(new_color)
#
# print(rgb_colors)


colors_list = [(233, 233, 232), (235, 232, 233), (230, 232, 236), (224, 232, 226), (201, 160, 94), (134, 92, 62), (61, 88, 125), (219, 206, 117), (138, 174, 198), (150, 58, 84), (46, 55, 101), (124, 37, 47), (135, 186, 146), (162, 159, 56), (78, 27, 43), (40, 41, 59), (179, 102, 109), (180, 145, 174), (55, 38, 32), (90, 124, 177), (185, 88, 79), (94, 154, 96), (87, 150, 163), (34, 36, 35), (47, 72, 76), (79, 74, 45), (88, 102, 101), (166, 199, 214), (215, 178, 186), (175, 204, 178), (216, 179, 174), (181, 189, 210), (113, 41, 40), (52, 71, 71)]
random_num = random.randint(0,len(colors_list) - 1)
# goal is to use turtle to create a spot painting 10 x 10 dots, each dot is 20 size and spaced by 50 gap
turtle.colormode(255)
tim = turtle.Turtle()
tim.penup()
tim.speed('fastest')

height = 0
tim.goto(0, 0)
times_to_run = 10
while times_to_run != 0:
    for i in range(0, 10):
        random_num = random.randint(0, len(colors_list) - 1)  # Generate a new random number for each dot
        tim.dot(20,colors_list[random_num])
        tim.forward(50)
    times_to_run -= 1
    height += 50
    tim.goto(0, height)

print('Finished')



# Maintain the screen open until I click inside it to close it.
screen = Screen()
screen.exitonclick()