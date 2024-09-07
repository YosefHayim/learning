fruits = ["Apple", "Peach", "Pear"]

# The name fruit in the loop is a temp variable to make sense the logic of the for loop
# Than I provide the object, list, dictionary that it is going to loop through e.g. fruits
# Finishing the for loop is with columns, and then it is indentation inside it.
# for fruit in fruits:
#     print(fruit)

# This is the same just changing the temp variable to i as I know this from javascript.
# for i in fruits:
#     print(i)

# The loop variable "i" is temporary and only retains its last value after the loop. Store it in another variable inside the loop if i want to access it outside.
# final_value = 0
# for i in range(5):
#     final_value = i
# print("Final value of i:", final_value)

# python has the sum function that can sum all the data in the example:
# student_scores = [150, 142, 185, 120, 171, 184, 149, 24, 59, 68, 199, 78, 65, 89, 86, 55, 91, 64, 89]
# total_scores = sum(student_scores)
# print(total_scores)

# alternatively I can use the for loop for it.
# student_scores = [150, 142, 185, 120, 171, 184, 149, 24, 59, 68, 199, 78, 65, 89, 86, 55, 91, 64, 89]
# sum = 0
# for i in student_scores:
#     sum += i
# print('Total score of students is:', sum)

# Exercise without using the max function, I did it :)
# student_scores = [150, 142, 185, 120, 171, 184, 149, 24, 59, 68, 199, 78, 65, 89, 86, 55, 91, 64, 89]
# highest_score = 0
# for i in student_scores:
#     current_score = i
#     if current_score > highest_score:
#         highest_score = current_score
#
# print('Highest score number from student scores is:', highest_score)

# the range function in a for loop, this prints from the including it up to b not including it. range(a,b)
# for i in range(1,10):
#     print(i)

# If I want to step each loop by specific amount i willd o like this:
# for i in range(1,11,2):
#     print(i)

# Guess challnage
# sum = 0
# for i in range(1,101):
#     sum += i
# print(f'Total sum is:{sum}')

# Coding exercise FizzBuzz:
# for i in range(1,101):
#     if i % 3 == 0 and i % 5 == 0:
#         print('FizzBuzz')
#     elif i % 3 == 0:
#         print('Fizz')
#     elif i % 5 == 0:
#         print('Buzz')
#     else:
#         print(i)