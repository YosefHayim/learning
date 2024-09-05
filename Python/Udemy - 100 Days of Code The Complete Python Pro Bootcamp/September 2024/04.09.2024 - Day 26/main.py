import random

# Example to list comprehension
list_numbers = [1, 2, 3]
list_numbers_new = [i + 1 for i in list_numbers]
# Output: [2, 3, 4]

# This can be done not onl for lists but for strings as well.
name = "Joseph"
letters_list = [i for i in name]
# Output: ['J', 'o', 's', 'e', 'p', 'h']

numbers_range = range(1, 5)
new_numbers = [i * 2 for i in numbers_range]
# Output: [2, 4, 6, 8]

# We can do a conditional list comprehension
list_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
new_list = [i % 2 == 0 for i in list_numbers]
# Output: [False, True, False, True, False, True, False, True, False]

# 2nd example for conditional list comprehension
names = ["Alex", "Beth", "Dave", "Josephine", "Freddie"]
short_names = [i for i in names if len(i) < 5]
# Output: ['Alex', 'Beth', 'Dave']

# 3rd example for conditional list comprehension for two conditions
names = ["Alex", "Beth", "Dave", "Josephine", "Freddie"]
caps_names = [i.upper() for i in names if len(i) < 5]
# Output: ['ALEX', 'BETH', 'DAVE']

# Challenge 1:
numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
squared_numbers = [i * i for i in numbers]
# Output: [1, 1, 4, 9, 25, 64, 169, 441, 1156, 3025]

# Challenge 2:
list_of_strings = ['9', '0', '32', '8', '2', '8', '64', '29', '42', '99']
numbers = [int(i) for i in list_of_strings]
result = [i for i in numbers if i % 2 == 0]
# Output : [0, 32, 8, 2, 8, 64, 42]

# Challenge 3:
with open("file1.txt", mode="r") as file:
    with open("file2.txt", mode="r") as filetwo:
        dataTwo = [int(i.strip()) for i in filetwo]
    data = [int(i.strip()) for i in file]

common_list_numbers = [i for i in data if i in dataTwo]
# Output: [3, 6, 5, 33, 12, 7, 42, 13]

# Dictionary comprehension and conditional as well
names_list = ["Alex", "Beth", "Dave", "Josephine", "Freddie"]
student_scores = {i: random.randint(1,100) for i in names_list}
# Output : {'Alex': 76, 'Beth': 59, 'Dave': 30, 'Josephine': 67, 'Freddie': 54}

passed_students = {i:score for (i,score) in student_scores.items() if score >= 60}
# Output : {'Alex': 83, 'Beth': 68, 'Dave': 89, 'Freddie': 63}

# Challenge 4:
sentence = "What is the Airspeed Velocity of an Unladen Swallow?"
words = sentence.split()
new_result = {i:len(i) for i in words}
# Output : {'What': 4, 'is': 2, 'the': 3, 'Airspeed': 8, 'Velocity': 8, 'of': 2, 'an': 2, 'Unladen': 7, 'Swallow?': 8}


# Challenge 5:
weather_c = {"Monday": 12, "Tuesday": 14, "Wednesday": 15, "Thursday": 14, "Friday": 21, "Saturday": 22, "Sunday": 24}
weather_f = {day:temp * 9/5 + 32 for (day,temp) in weather_c.items()}
# Output: {'Monday': 53.6, 'Tuesday': 57.2, 'Wednesday': 59.0, 'Thursday': 57.2, 'Friday': 69.8, 'Saturday': 71.6, 'Sunday': 75.2}

# Looping through dictionaries:
student_dict = {
    "student": ["Angela", "James", "Lily"],
    "score": [56,75,98]
}

for (key,value) in student_dict.items():
    pass
    # print(key) # Output key: student , score
    # print(value) # Output score: [56,75,98]

