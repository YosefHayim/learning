# Debug exercise 1:
#from random import randint
#dice_images = ["❶", "❷", "❸", "❹", "❺", "❻"]
# The bug was here since the indexes is from 0 to 5 and the rand int is from 1 to 6. which 6 isn't available
# Found the bug by the error: IndexError: which says list index out of range
#dice_num = randint(0, 5)
# Use this to debugging instead of waiting for it to load by the random.
# print(dice_images[0])
# print(dice_images[dice_num])


# Learning how to debug
# def function():
#     for i in range(1, 20):
#         if i == 20:
#             print("You got it.")

# Describe the problem - write your answer as comments:
# 1. What is the loop for doing? # The for loop function prints number from 1 to 20, since it gets to only the number 19 it gets error and won't print it.
# 2. When is the function meant to print "You got it"? # The function is ment to print You got it when the i is equal to 20
# 3. What are your assumptions about the value of i? # i is the number in each iteration that represent the range between 1 and 20. e.g. 1 , 2, 3...

# Another debug exercise 2:
# year = int(input("What's your year of birth?"))
#
# # The bug was adding '=' to the second year condition which is year <= 1994 than it includes it as well.
# if year > 1980 and year <= 1994:
#     print("You are a millennial.")
# elif year > 1994:
#     print("You are a Gen Z.")

# Learning about the try else block how to use it.
# try:
#     age = int(input("How old are you?: "))
# except ValueError:
#     print("You have typed an invalid number. Please try again with integer response. ")
#     age = int(input("How old are you?: "))
#
#     if age > 18:
#         print(f"You can drive at age {age}. ")


# Another debug exercise 3:
# word_per_page = 0
# pages = int(input("Number of pages: "))
# # This one just had ad double == which is use to check condition and not assign variable
# word_per_page = int(input("Number of words per page: "))
# total_words = pages * word_per_page
# print(total_words)

# Another debug exercose 4:
# import random
# import maths
#
# def mutate(a_list):
#     b_list = []
#     new_item = 0
#     for item in a_list:
#         new_item = item * 2
#         new_item += random.randint(1, 3)
#         new_item = maths.add(new_item, item)
#         # The error was that the b_list.append(new_item) was indented
#         # outside the for loop which only add to the end of the for
#         # loop instead to each time it ends to iterate
#         b_list.append(new_item)
#     print(b_list)
#
#
# mutate([1, 2, 3, 5, 8, 13])

# Coding exercise 12: Debugging Odd or Even:
# def odd_or_even(number):
#     if number % 2 == 0:
#         return "This is an even number."
#     else:
#         return "This is an odd number."

# Coding exercise 13: debugging leap year:
# def is_leap(year):
#     if year % 4 == 0:
#         if year % 100 == 0:
#             if year % 400 == 0:
#                 return True
#             else:
#                 return False
#         else:
#             return True
#     else:
#         return False

# Coding exercise 14: debugging fizzbuzz:
# Target is the number up to which we count
# def fizz_buzz(target):
#     for number in range(1, target + 1):
#         if number % 3 == 0 and number % 5 == 0:
#             print("FizzBuzz")
#         elif number % 3 == 0:
#             print("Fizz")
#         elif number % 5 == 0:
#             print("Buzz")
#         else:
#             print(number)