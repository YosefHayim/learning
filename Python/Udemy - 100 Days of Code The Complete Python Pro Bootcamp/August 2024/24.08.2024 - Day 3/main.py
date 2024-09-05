# Control Flows with if / else conditional Operators
# condition = 1
# if condition: # if this condition is True then execute the next line of code
#     print('Its 1 cause 1 equal to True.')
# else: # else the previous condition or the previous conditions are false then execute the next line of code
#     print('Its 0 cause 0 equal to False.')

# Compression Operators
# > greater than
# < less than
# >= greater than or equal to
# <= less than or equal to
# == equal to
# != not equal to

# The modulo Operator %, using it will provide to us the reminder e.g. 10 % 3 = 1.
# n = 8
# if n % 2 == 0:
#     print('This is even number')
# else:
#     print('This is odd number')

# Nested if / else statements
# condition = 1
# do_this = 2
# another_condition = 3
# if condition:
#     do_this
#     if another_condition:
#         do_this
#     else:
#         do_this
# else:
#     do_this

# weight = 85
# height = 1.85
#
# bmi = weight / (height ** 2)
#
# if bmi < 18.5:
#     print("Underweight")
# elif bmi >= 18.5 and bmi < 25:
#     print("normal weight")
# else:
#     print("overweight")

# Multiple if (each of the if's must be true in order to complete the cycle of the conditions)
# condition = 1
# if condition:
#     print('V1')
# if condition:
#     print('V2')
# if condition:
#     print('V3')

# print("Welcome to Python Pizza Deliveries!")
# size = input("What size pizza do you want? S, M or L: ")
# pepperoni = input("Do you want pepperoni on your pizza? Y or N: ")
# extra_cheese = input("Do you want extra cheese? Y or N: ")
# bill = 0
#
# if size == 'S':
#     bill += 15
#     if pepperoni == 'Y':
#         bill += 2
#
# if size == 'M':
#     bill += 20
#     if pepperoni == 'Y':
#         bill += 3
#
# if size == 'L':
#     bill += 25
#     if pepperoni == 'Y':
#         bill += 3
#
# if extra_cheese == 'Y':
#     bill += 1
#
# print(f"Your final bill is: ${bill}.")

# Logical Operators
# a = 5
# b = 10
# c = 15
#
# if (a < b and b < c) or not (c == 15):
#     print("Complex condition is true")
# else:
#     print("Complex condition is false")
