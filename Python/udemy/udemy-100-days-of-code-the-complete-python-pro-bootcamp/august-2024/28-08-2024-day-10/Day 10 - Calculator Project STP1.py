from art import logo
print(logo)

# TODO number 1 - Create the functions add,subtract,multiple,divide

def add(n1, n2):
    return n1 + n2

def subtract(n1, n2):
    return n1 - n2

def multiplie(n1, n2):
    return n1 * n2

def divide(n1, n2):
    return n1 / n2

# TODO number 2 - create a dictionary that stores the functions.
operations = {
    "+": add,
    "-": subtract,
    "*": multiplie,
    "/": divide,
}

# TODO number 3 - use the dictionary operations to preform the calculations.
# print(operations["*"](8 , 4))
