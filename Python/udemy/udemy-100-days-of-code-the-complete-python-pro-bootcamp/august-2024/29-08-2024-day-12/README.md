## Day 12: Key Takeaways

1. **Local vs. Global Scope**  
   - **Local Scope:** Variables created inside a function are only accessible within that function.
   - **Global Scope:** Variables defined outside any function are accessible throughout the entire code.

2. **Understanding Scope**  
   - Where a variable is defined (inside or outside a function) determines whether it’s in local or global scope.

3. **Conditional Statements in Global Scope**  
   - Writing an `if` condition in the global scope with indented variables won’t affect the global scope’s ability to call those variables.

4. **Using `global` in Functions**  
   - The `global` keyword allows you to access and modify global variables from inside a function.

5. **Returning Values from Functions**  
   - The `return` statement allows a function to return a value to the global scope, where the result can be stored in a variable.

6. **Global Constants**  
   - Like `const` in JavaScript, Python uses uppercase naming conventions for constants (e.g., `PI = 3.14159`) to indicate they should not be changed, though immutability is not enforced.

7. **Using Global Variables Across Functions**  
   - A global variable modified within a function can be used elsewhere in the global scope.

8. **Number Guessing Game Project**  
   - The number guessing game project was fun but slightly confusing. Using draw.io to visualize the logic made it much easier to manage.

9. **Docstrings**  
   - Using docstrings allows me to add explanations to functions or variables, making it easier to understand their purpose when working in the PyCharm environment.