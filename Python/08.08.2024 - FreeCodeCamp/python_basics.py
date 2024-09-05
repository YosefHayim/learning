# Python Concepts for Beginners

# 1. Variables
# A variable stores a value that can be used and manipulated in your code.
# Variables can hold different types of data such as strings, numbers, etc.
message = "hello world"  # String variable
number = 42              # Integer variable
pi = 3.14                # Float variable

# 2. Strings
# A string is a sequence of characters enclosed in single or double quotes.
greeting = "Hello, Python!"
text = 'This is a string'

# 3. Functions
# A function is a block of reusable code that performs a specific task.
# Functions are defined using the 'def' keyword followed by the function name and parentheses.
def greet(name):
    # This function takes a name as input and returns a greeting message.
    return f"Hello, {name}!"

def add(a, b):
    # This function takes two numbers as input and returns their sum.
    return a + b

# 4. For Loop
# A for loop is used for iterating over a sequence (like a list, string, or range).
# The 'range' function generates a sequence of numbers.
for i in range(5):
    # This loop will run 5 times, with 'i' taking values from 0 to 4.
    # The range(5) means it starts from 0 and goes up to but not including 5.
    print(f"Loop iteration: {i}")

# Example 2: Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    # 'fruit' is a temporary placeholder that takes the value of each element in the list.
    # 'in' is used to specify the sequence we are iterating over.
    print(f"Current fruit: {fruit}")

# Example 3: Using range with a start and stop value
for i in range(2, 7):
    # This loop will run from 2 to 6, with 'i' taking values from 2 to 6.
    # range(2, 7) means it starts from 2 and goes up to but not including 7.
    print(f"Number: {i}")

# Example 4: Using range with a step value
for i in range(1, 10, 2):
    # This loop will run from 1 to 9, with 'i' taking values 1, 3, 5, 7, and 9.
    # range(1, 10, 2) means it starts from 1, goes up to but not including 10, with a step of 2.
    print(f"Odd number: {i}")

# Iterating over a string
for char in "python":
    # This loop will iterate over each character in the string "python".
    print(char)  # Prints each character: 'p', 'y', 't', 'h', 'o', 'n'

# 5. If Statement
# An if statement is used for decision making.
# It allows the code to execute certain sections based on conditions.
number = 10
if number > 5:
    # This block will execute if the condition (number > 5) is true.
    print("Number is greater than 5")
elif number == 5:
    # This block will execute if the previous condition was false and this condition (number == 5) is true.
    print("Number is equal to 5")
else:
    # This block will execute if none of the above conditions are true.
    print("Number is less than 5")

# 6. Lists (Arrays)
# A list is a collection of items (elements) which can be of different types.
# Lists are ordered and changeable, and allow duplicate members.
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Accessing an element by index. This will print 'apple'.

# 7. Indexing
# Accessing elements using their position in a list or string.
# Indexing starts from 0, so the first element is at index 0.
word = "python"
first_letter = word[0]  # Accessing the first character of the string 'word'.
print(first_letter)  # Output: 'p'

# 8. String Methods
# Strings have built-in methods for various operations like transforming, splitting, etc.
uppercase_text = "hello".upper()  # Converts the string to uppercase.
# The upper() method converts all characters in a string to uppercase.
# Example: "hello".upper() returns "HELLO".
print(uppercase_text)  # Output: 'HELLO'

# 9. Dictionary
# A dictionary is a collection of key-value pairs.
# It is unordered, changeable, and indexed by keys which must be unique and immutable.
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(person["name"])  # Accessing a value by key. This will print 'Alice'.

# 10. Boolean Values and Comparisons
# Boolean values are either True or False.
is_sunny = True
is_raining = False

# Comparison operators are used to compare values.
print(5 == 5)  # Output: True
print(5 != 3)  # Output: True
print(5 > 3)   # Output: True
print(5 < 3)   # Output: False

# 11. Basic Arithmetic Operations
# Basic arithmetic operations include addition, subtraction, multiplication, division, modulus, and exponentiation.
a = 10
b = 3
print(a + b)  # Output: 13
print(a - b)  # Output: 7
print(a * b)  # Output: 30
print(a / b)  # Output: 3.3333333333333335
print(a % b)  # Output: 1  (modulus gives the remainder)
print(a ** b) # Output: 1000  (exponentiation)

# 12. Comments
# Comments are used to explain code and are ignored by the interpreter.
# Single-line comments start with '#'.
'''
Multi-line comments are enclosed in triple quotes.
They can span multiple lines.
'''

# 13. Type Conversion
# Converting between different data types.
num_str = "123"
num_int = int(num_str)  # Convert string to integer.
# The int() function converts a string or number to an integer.
# Example: int("123") returns 123.
print(num_int)  # Output: 123

# 14. While Loop
# A while loop repeats a block of code as long as a condition is true.
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1  # Increment count

# 15. List Methods
# Lists have built-in methods for various operations.
fruits.append("orange")  # Adds an item to the end of the list.
# The append() method adds a single element to the end of a list.
# Example: fruits.append("orange") adds "orange" to the list fruits.
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']

fruits.remove("banana")  # Removes the first occurrence of the item.
# The remove() method removes the first occurrence of a specified value.
# Example: fruits.remove("banana") removes "banana" from the list fruits.
print(fruits)  # Output: ['apple', 'cherry', 'orange']

fruits.sort()  # Sorts the list in ascending order.
# The sort() method sorts the list in place.
# Example: fruits.sort() sorts the list fruits in ascending order.
print(fruits)  # Output: ['apple', 'cherry', 'orange']

print(len(fruits))  # Output: 3  (returns the number of items in the list).
# The len() function returns the number of items in an object.
# Example: len(fruits) returns the number of elements in the list fruits.

# 16. Exception Handling
# Exception handling allows you to handle errors gracefully using try-except blocks.
try:
    result = 10 / 0  # This will raise a ZeroDivisionError.
except ZeroDivisionError:
    print("Cannot divide by zero!")
    # The except block will execute if the try block raises the specified exception.

# Example usage of provided functions
print(greet("Yosef"))  # Output: 'Hello, Yosef!'
print(add(5, 3))       # Output: 8

# Section 17: While Loop
# A while loop continues to execute as long as its condition is True.
count = 0
while count < 5:
    # This loop will run as long as 'count' is less than 5.
    # The variable 'count' acts as a temporary placeholder to control the loop.
    print(f"Count is: {count}")
    count += 1  # Increment the count to avoid infinite loop.

# Section 18: Nested For Loop
# A nested for loop is a loop inside another loop.
for i in range(3):
    # Outer loop runs 3 times with 'i' taking values from 0 to 2.
    for j in range(2):
        # Inner loop runs 2 times for each iteration of the outer loop.
        # 'j' takes values from 0 to 1 for each 'i'.
        print(f"i: {i}, j: {j}")

# Section 19: Nested While Loop
# A nested while loop is a while loop inside another while loop.
outer_count = 0
while outer_count < 3:
    # Outer loop runs as long as 'outer_count' is less than 3.
    inner_count = 0
    while inner_count < 2:
        # Inner loop runs as long as 'inner_count' is less than 2.
        # 'outer_count' and 'inner_count' act as temporary placeholders to control the loops.
        print(f"Outer count: {outer_count}, Inner count: {inner_count}")
        inner_count += 1  # Increment the inner count to avoid infinite loop.
    outer_count += 1  # Increment the outer count to move to the next iteration.
