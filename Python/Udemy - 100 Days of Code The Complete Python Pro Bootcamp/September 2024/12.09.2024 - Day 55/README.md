## Day 55: Key Takeaways

### 1. **Today's Goals**
   - Dive deeper into Flask and web development.
   - Learn how to render HTML and handle user input from URLs.
   - Explore advanced decorators with positional and keyword arguments.

### 2. **Things I Learned from Today's Lesson**
   - How to render HTML pages using Flask.
   - How to use URL routing to capture user input and pass it into the app.
   - The power of advanced decorators to handle function inputs dynamically.
   - Using `app.route("<variable>")`, where `<variable>` holds a dynamic value from the URL that can be used in the code.
   - Similar to **nodemon** in Node.js, Flask has a **debug mode** that auto-reloads the server whenever the code is modified. To enable it, set `debug=True` in `app.run()`.
   - The variable in the URL (e.g., `<variable>`) must match the argument in the function, otherwise, it will raise an error.
   - Example of a Flask **decorator**:
     ```python
     def make_bold(func):
         def wrapper():
             return f'<b>{func()}</b>'
         return wrapper
     ```

   - When passing arguments to a function using `*args`, the first argument passed is at index `0` in the `args` tuple.

     Example:
     ```python
     def example(*args):
         print(args[0])  # Accessing the first argument
     
     example(10, 20, 30)
     ```
     Output:
     ```
     10
     ```
   - `func.__name__` is a built-in Python attribute that prints the name of the function.