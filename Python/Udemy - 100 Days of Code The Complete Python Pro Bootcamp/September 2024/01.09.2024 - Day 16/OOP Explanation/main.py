# Writing this import way is more specifically and organized then importing the entire module, this imports specific method.
from turtle import Turtle,Screen

# Using the dot after the module will provide me all the possibilities to fetch from that module
# print(another_module.another_variable)

# Writing a code using the OOP is usually with a variable assigned to the class with a first letter of each word capitalize
# car = CarBlueprint()

# Using the OOP method from the library turtle to use the method Turtle.
# this Turtle is an object as when I print it is provides "<turtle.Turtle object at 0x0000027189685B40>"
# timmy = Turtle()

# I can also use with a comma a double code in one line as Python reads this in a separate code line each.
# timmy.shape("turtle"),timmy.color("blue")

# Change the color of our timmy turtle
# timmy.color("DeepPink1")

# OOP Has some attributes that are being used with object.attribute
# e.g. car.speed, basically it is importing the object and calling the method / attribute from it.

# This is the attribute screen from the turtle library.
# my_screen = Screen()

# Basically what it does is checking the canvas height of the pop-up window and prints the height of it.
# this is a builtin module in the Turtle library.
# print(my_screen.canvheight)

# Makes timmy moves 100 steps forward
# timmy.forward(100)

# This allows me to keep the screen open until I click in the screen, hovering with the mouse on the method / attribute explains it.
# my_screen.exitonclick()

# Setting the object to table.
from prettytable import PrettyTable
table = PrettyTable()

# Adding to the table the column name Pokémon name and the rows with the orders by the list, used another table.add column since that's how the doc works.
pokemon_name = table.add_column("Pokemon Name",["Pikachu","Squirtle","Charmander"]),table.add_column("Type",["Electric","Water","Fire"])
# Align the strings to left
table.align = "l"
# Printing the total look of the table.
print(table)
