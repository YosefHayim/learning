import time
from turtle import Turtle
import random

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
SPEED_LEVELS = ["fastest", "fast", "normal", "slow", "slowest"]
random_num = random.randint(0,len(SPEED_LEVELS) - 1)

class CarManager(Turtle):
    def __init__(self):
        super().__init__()
        self.hideturtle()
        self.game_on = True
        self.cars = []

    def move_cars(self):
        for car in self.cars:
            car.backward(20)
            time.sleep(0.1)

    def create_cars(self):
        new_car = Turtle("square")
        new_car.penup()
        new_car.shapesize(stretch_len=2, stretch_wid=1)
        new_car.color(random.choice(COLORS))
        random_y = random.randint(-22, 25) * 10
        new_car.goto(250, random_y)
        self.cars.append(new_car)

    def increase_speed_randomly(self):
        for car in self.cars:
            car.speed(f"{SPEED_LEVELS[random_num]}")

