Key points of day 13:
1 - Debugging is essential – Learn techniques to identify and fix bugs in your code.
2 - Everyone makes mistakes – Bugs are common and nothing to feel discouraged about.
3 - Grace Hopper's role in programming history – She found the first documented "bug" in a computer.
4- Describe the problem clearly – A well-understood problem is easier to debug.
5 - Test assumptions – Validate assumptions to find errors, such as knowing how Python's range() function works (it excludes the upper bound).
6 - Fix by adjusting logic – In the example, the fix was changing range(1, 20) to range(1, 21) to include 20.
7 - Fixing errors and bugs by reading the error on the terminal / console.
8 - I can catch exceptions using the try-except block code.
9 - Using the print statements as a debugger is a great tool.
10 - Using the red circle dot across the row lines number and pressing than 
    the debugger icon on the top left near the run will execute that 
    specific red line of code and show me the result or the few lines that I mark
    great for debugging a more amounts of files and very helpful.
11 - run the code more often each 5-10 code lines to tackle many bugs as possible.
12 - google the error or the bug by chatGPT or stackoverflow
13 - ask a friend for help / chatGPT
14 - do a break and rest or get back to it tomorrow.

key points for try-except blocks:
Purpose of try-except: Used to handle exceptions (errors) that occur during code execution, preventing the program from crashing.

Basic Structure:
try block: Write code that might raise an exception.
except block: Handle the specific exception if it occurs.
Exception Types: Use specific exception names (e.g., ZeroDivisionError, ValueError) to handle different types of errors.

Capturing Exception Details:
Use as e to capture the exception object in a variable.
e contains the error message or details about the exception.

Multiple Exceptions:
You can handle multiple exceptions by using a tuple in the except block.
Example: except (ValueError, TypeError) as e.
Using in Loops: try-except can be used within loops (e.g., while) to repeatedly handle exceptions until a condition is met.

Error Message: The variable e (or your chosen name) holds the error message, which can be printed or logged for debugging.