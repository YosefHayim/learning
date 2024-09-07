# How python developers structure the of dictionary:
# The comma is another key value in the dictionary.
programming_dictionary = {
    "Bug": "An error in a program that prevents the program from running as expected.",
    "Function": "A piece of code that you can easily call over and over again."
}

# Executing the dictionary by calling the bug key, and it prints their value.
# print(programming_dictionary["Bug"])

# Calling a key by using a variable

pc_type = "windows"
computer_types = {
    pc_type: "This is a windows pc"
}

# Executing the dictionary by calling the variable and prints their value.
# print(computer_types[pc_type])

# To add to the dictionary in python it is similiar to Javascript
programming_dictionary["KeyValue3"] = "This is the third value in the programming dictionary"
# print(programming_dictionary)

# Wiping an entire dictionary is very similar to attach variable to something empty.
programming_dictionary = {}
# print(programming_dictionary)

# Edit item in dictionary
programming_dictionary["bug"] = "This is the new value for the bug key."
# print(programming_dictionary["bug"])

# how to loop through dictionary, output will be iterating over the keys.
# for i in programming_dictionary:
#     print(i)

# loop through dictionary and getting the keys and values
for i in programming_dictionary:
    pass
    # This i prints the keys
    # print(i)
    # This i with the square brackets prints the values.
    # print(programming_dictionary[i])

# Coding Exercise 9 Grading Program:
#     student_scores = {
#         'Harry': 88,
#         'Ron': 78,
#         'Hermione': 95,
#         'Draco': 75,
#         'Neville': 60
#     }
#
#     student_grades = {}
#
#     for i in student_scores:
#         if student_scores[i] >= 91:
#             student_grades[i] = "Outstanding"
#
#         elif student_scores[i] >= 81 and student_scores[i] <= 90:
#             student_grades[i] = "Exceeds Expectations"
#
#         elif student_scores[i] >= 71 and student_scores[i] <= 80:
#             student_grades[i] = "Acceptable"
#
#         else:
#             student_grades[i] = "Fail"
#
# print(student_grades)

capitals = {
    "France": "Paris",
    "Germany": "Berlin",
}

# Example to nested dictionary with lists as the values.
travel_log = {
    "France": ["Paris","Lille","Dijon"],
    "Germany": ["Stuttgart","Berlin"]
}

# printing the travel log france key and printing the position of lille from the list which is index 1.
# print(travel_log["France"][1])

# Getting the nested list of C,D and the letter D specifically
nested_lists = ["A","B",["C","D"]]
# print(nested_lists[2][1])

# Dictionary with a nested dictionary and a list in the second dictionary
travel_log = {
    "France": {
        "cities_visited": ["Paris", "Lille", "Dijon"],
        "total_visits": 12
    },
    "Germany": {
        "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 5
    }
}

# Getting the nested dictionary from germany then the nested dictionary cities visited then the value of the list which is at position 2.
# print(travel_log["Germany"]["cities_visited"][2])

