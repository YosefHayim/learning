## Day 34: Key Takeaways

1. **Building The Trivia API and Quizzer App**  
   - Worked on creating the Trivia API and Quizzer app, enhancing my understanding of API integration.

2. **HTML Entities**  
   - HTML entities are used to replace special characters in HTML to prevent confusion with HTML code.  
   - Example: `&#039;` represents an apostrophe (`'`).

3. **Using the `html` Library**  
   - To translate HTML entities to regular characters in Python, the built-in `html` library can be used.

4. **Data Type Declaration**  
   - You can declare data types for variables in Python.  
     Example:
     ```python
     age: int
     age = 12  # Must be an integer since we declared it as such.
     ```

5. **Function Parameter Type Hints**  
   - You can specify the expected data type of function parameters.  
     Example:
     ```python
     def is_age_int(age: int) -> bool:
         if age:
             return True
         return False
     ```

6. **Type Hints for Function Returns**  
   - Using the arrow (`->`) after a function's parameters tells Python the expected return type.  
     Example:
     ```python
     def you_good(age: int) -> bool:
         return age >= 18
     ```