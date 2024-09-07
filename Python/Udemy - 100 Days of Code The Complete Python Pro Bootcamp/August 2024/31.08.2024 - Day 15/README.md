## Day 15: Key Takeaways

1. **Input Validation**  
   - Ensured valid user input for drink selection (e.g., espresso, latte, cappuccino, off, report).

2. **Modular Code Structure**  
   - Organized the code into functions such as `prompt_user()`, `check_resources_is_sufficient()`, and `insert_coins_by_user()`.

3. **Resource Management**  
   - Managed available ingredients and updated resources after preparing each drink.

4. **Financial Transactions**  
   - Simulated coin insertion and handled payments.

5. **Control Flow**  
   - Used loops and conditionals to manage the overall program logic.

6. **Efficiency with Shortcuts**  
   - Discovered that using `Alt + Shift` allows simultaneous typing on multiple lines, saving time.

7. **PDF Conversion Issues**  
   - Found that reverse double quotes from PDFs are not accepted in Python.

8. **Python PEP 8 Guide**  
   - Recommended to limit lines to a maximum of 120 characters when using docstrings or comments for better readability.

9. **Global Scope Reminder**  
   - Remember to use the `global` keyword when accessing global variables inside functions (local scope).

10. **Studying Environment Matters**  
   - Learning at the library (Meditek) enhances focus and productivity compared to studying at home.

### Potential Pitfalls to Watch Out For:

1. **Hardcoded Values**  
   - Avoid hardcoding values like `espresso_milk = 0`; make them more flexible.

2. **Type Checking**  
   - Ensure user input is of the correct type (e.g., integers) and is non-negative.

3. **Handling Return Values**  
   - Handle cases where `None` is returned to avoid potential unpacking errors.

4. **Global Variables**  
   - Be cautious with direct modification of global resources to avoid unintended side effects.

5. **Failed Transactions**  
   - Handle failed transactions explicitly rather than assuming success.

6. **Naming Conventions**  
   - Use consistent and clear variable names to enhance code readability.