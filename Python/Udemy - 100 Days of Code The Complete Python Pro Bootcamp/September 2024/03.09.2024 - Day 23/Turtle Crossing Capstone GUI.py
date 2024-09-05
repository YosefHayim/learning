import time
from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

# Set the screen
screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

# Set the player
player = Player()

player.go_up()
player.go_down()
player.go_left()
player.go_right()

# Set the scoreboard
scoreboard = Scoreboard()

# Set the cars
car_manager = CarManager()

count = 0
game_is_on = True

while game_is_on:
    time.sleep(0.1)
    screen.update()
    car_manager.move_cars()
    count += 1

    # Create and move cars
    if count % 6 == 0:
        car_manager.create_cars()

    # Detect when the turtle hits a car
    for car in car_manager.cars:
        if player.distance(car) < 20:  # Adjust the distance threshold as needed
            print('Game Over!')
            game_is_on = False

    if player.ycor() > 280:
        scoreboard.reached_end()
        player.reset_location()
        car_manager.increase_speed_randomly()
        print('You won the round!')


screen.exitonclick()
