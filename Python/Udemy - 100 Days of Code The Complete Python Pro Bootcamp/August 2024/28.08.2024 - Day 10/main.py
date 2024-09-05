# This is an example for function with an output keyword which is the return.
def my_function():
    # The output of this function is the result
    return 3 * 2

# This variable total_output will store the result in my_function which is 6
total_output = my_function()

# Printing the function output which is 6.
# print(total_output)

# Example to use the output and print it out by assign it to another variable outside in the global scope.
# def format_name(f_name,l_name):
#     first_name = f_name.title()
#     last_name = l_name.title()

#     return first_name,last_name

# output_function = format_name(f_name="yosef",l_name="sabag")
# print(output_function)

# I can also just print it without assign to a variable
# print(format_name(f_name="yosef",l_name="sabag"))

# This example shows how to execute a function in another function by having the same type of code e.g. strings.
# def function_1(text):
#     return text * 3
#
# def function_2(text):
#     return text.title()

# Calling the function_2 to use function_1 with the text of it which is "hellomate"
# output = function_2(function_1("hellomate"))
# print(output)

# In the following example, return is used in different scenarios inside a function:
# return ends the function: Once Python hits return, it stops executing the function and sends back the result.
# Multiple return statements: You can have multiple return statements in a function, often used with conditions (e.g., if statements).

# def format_name(f_name,l_name):
#     if f_name == "" or l_name == "":
#         return "You didnt provide any valid inputs."
#
#     formatted_f_name = f_name.title()
#     formatted_l_name = l_name.title()
#     return f"Result: {formatted_f_name} {formatted_l_name}"
#
# print(format_name(input("What is your first name?"), (input("What is your last name?"))))

# Coding Exercise 10: Leap Year
# def is_leap_year(year):
#     if year % 4 == 0:
#         if year % 100 == 0:
#             if year % 400 == 0:
#                 return True
#
#             else:
#                 return False
#
#         else:
#             return True
#
#     else:
#         return False
#
# is_leap_year(1989)

# Example of docstrings using 6 double quotes 3 for open 3 for close.
"""
This is example of a docstrings, which allows me to write in multiple lines,
this is the second line
this is the 3rd line
this is the 4th line e.g. "hi there this is not interrupting the docstrings"
"""

"""
This is an example of how to attach a variable to only the function name and then 
call that variable with the keyword 
parameters to pass it to the function.
"""

# def add(n1,n2):
#     return n1 + n2

# Storing the function to last_function
# last_function = add

# Then add the keyword arguments to it and print out the result which is 25.
# print(last_function(10,15))


