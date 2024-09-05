from turtle import Turtle  # Import the Turtle class from the turtle module
import random

# Define the Food class, which inherits from the Turtle class
class Food(Turtle):

    def __init__(self):
        super().__init__()  # Initialize the Turtle class, allowing Food to use Turtle's methods and attributes
        self.shape("circle")  # Set the shape of the Food object to a circle
        self.penup()
        self.shapesize(stretch_len=0.5, stretch_wid=0.5)  # Resize the Food object to be smaller (half the size in both length and width)
        self.color("purple")
        self.speed("fastest")
        random_x = random.randint(-280,280)
        random_y = random.randint(-280,280)
        self.goto(random_x,random_y)
        self.refresh()

    def refresh(self):
        random_x = random.randint(-280,280)
        random_y = random.randint(-280,280)
        self.goto(random_x,random_y)

