from art import logo
# TODO number 1 - Create the functions add,subtract,multiple,divide
print(logo)

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

is_first_number = int(input("What is the first number? "))
for i in operations:
    print(i)
is_operator = input("What is the operator you want to use? ")
is_second_number = int(input("What is the second number? "))
result = 0

if is_operator == "+":
    result = operations["+"](is_first_number,is_second_number)

elif is_operator == "-":
    result = operations["-"](is_first_number,is_second_number)

elif is_operator == "*":
    result = operations["*"](is_first_number,is_second_number)

elif is_operator == "/":
    result = operations["/"](is_first_number,is_second_number)

print(f"The result is: {result}")

is_user_want_continue_with_previous_result = input("Would you like to continue working with the previous result? y/n: ")

if is_user_want_continue_with_previous_result == "y":
    while is_user_want_continue_with_previous_result == "y":
        is_operator = input("What is the operator you want to use? +, -, * or /: ")
        is_second_number = int(input("What is the second number? "))
        previous_result = result

        if is_operator == "+":
            result = operations["+"](previous_result, is_second_number)

        elif is_operator == "-":
            result = operations["-"](previous_result, is_second_number)

        elif is_operator == "*":
            result = operations["*"](previous_result, is_second_number)

        elif is_operator == "/":
            result = operations["/"](previous_result, is_second_number)

        print(f"The result is: {result}\n")

        is_user_want_continue_with_previous_result = input("Would you like to continue working with the previous result? y/n: ")


else:
    print("\n" * 100)
    is_first_number = int(input("What is the first number? "))
    is_operator = input("What is the operator you want to use? +, -, * or /: ")
    is_second_number = int(input("What is the second number? "))

    if is_operator == "+":
        result = operations["+"](is_first_number, is_second_number)

    elif is_operator == "-":
        result = operations["-"](is_first_number, is_second_number)

    elif is_operator == "*":
        result = operations["*"](is_first_number, is_second_number)

    elif is_operator == "/":
        result = operations["/"](is_first_number, is_second_number)

    print(f"The result is: {result}\n")

