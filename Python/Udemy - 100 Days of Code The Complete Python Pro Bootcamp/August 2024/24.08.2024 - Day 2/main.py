# Getting the specified index by a strings, called subscripting:
# print("Hello"[0]) Printing the letter "H"

# Getting the specified index by the negative index number:
# print("Hello"[-1]) Printing the letter "o"

# Integer = whole number without any decimal places:
# print(1 + 4)

# Float = number that is with decimal places:
# print(1.2 + 5.2)

# Boolean it has two possible values either True or False with capital first letter!!!
# print(False)
# print(True)

# The function type() is providing data type of what variable we are checking.
# print(type("Hello")) Printing <class 'str'>
# print(type(3)) Printing <class 'int'>
# print(type(3.15)) Printing <class 'float'>
# print(type(True)) Printing <class 'bool'>

# The function int() is converting numbers in strings to integers numbers.
# print(int("123") + int("456")) Result is 579 instead of 123456

# I can convert to float using the function float()
# num = 10
# converted_float = float(num)  # Converts integer 10 to float 10.0
# print(converted_float)  # Output: 10.0

# I can convert to string using the function str()
# num = 25
# converted_string = str(num)  # Converts integer 25 to string "25"
# print(converted_string)  # Output: "25"

# I can convert to bool using the bool() function, when the value is 0, it converts to False
# value = 0
# converted_bool = bool(value)  # Converts 0 to False
# print(f"Boolean value of {value} is {converted_bool}")  # Output: Boolean value of 0 is False

# When the value is a non-zero number, it converts to True
# value = 5
# converted_bool = bool(value)  # Converts 5 to True
# print(f"Boolean value of {value} is {converted_bool}")  # Output: Boolean value of 5 is True

# Mathematical Operations in Python
# print(123 + 456)
# print(7 - 3)
# print(3 * 2)

# providing integer result
# print(6 / 3)

# providing floating number result
# print(6 // 3)

# getting the power of a number
# print(2 ** 10)

# There is a priority order, similar to the one in math, called PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction
# **
# * or /
# + or -

# Example:
# print(3 * 3 + 3 / 3 - 3) # Result is 6 I managed to it for left to right importunes

# height = 1.65
# weight = 84

# Write your code here.
# Calculate the bmi using weight and height.
# bmi = weight / height**2

# print(bmi)

# Using the round() function will round the number up or down depending on the first decimal number place.
# print(round(4.1)) # Output 4
# print(round(4.6)) # Rounding to 5
# n = 5.321321
# print(round(n,2)) # Output with 2 decimal places.

# Using the f-string like template literal in javaScript
# score = 0
# height = 1.8
# is_winning = True
# print(f"Player score is {score} and height is {height} he did won so {is_winning}")