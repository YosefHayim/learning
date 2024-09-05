Key points of day 12:
1 - in functions everything inside it called local scope, same as the outside on the file code, everything that is not identified is in the global scope of the file.
2 - Here’s a more concise version with the key points you wanted:
3 - Local Scope: Variables created inside a function are only accessible within that function.
4 - Global Scope:Variables defined outside any function are accessible throughout the entire code.
5 - Understanding Scope: Where you define a variable (inside or outside a function) determines whether it’s in local or global scope.
6 - Writing if condition in the global scope and then having the indentation won't affect of calling the indented variables in the global scope.
7 - Using the word global with a variable inside a function will allow to use outside variables inside functions.
8 - Using the return statement inside a function allows me to return it to the global scope, therefore I can assign the function to a variable, so I store the outcome of that function to that variable.
9 - Global Constants are like const in javascript , making that variable to not modify it in a code
10 - Python global constants: No enforced immutability, but convention suggests using uppercase to signal that the variable should not change. e.g. using variable in uppercase like PI = 3.14159
11 - Using the global variable in a function allow me to use it in other global scopes.
12 - this specific project number guessing game was fun and little confusing but the draw.io helps a lot.
13 - Using the docstrings is allowing me to place an explanation using the pyCharm environment whenever I later call that function or variable that the docstrings is attached to.
14 - 