Key points of day 34:
1 - Building The Trivia API and The Quizzer app
2 - HTML entities, a way of replacing certain character in HTML so that it doesn't get confused with HTML code.
3 - In order to make an HTML entities e.g. ("#039;" which stands for: ') I need to import to the Pycharm the library called html which is built for these cases to translate HTML entities to regular letters in english.
4 - another approach with data types is:
    age: int
    when later on I want to set age to something it must be integer because we set it earlier to integer
    age = 12
5 -  Using the previous approach in num 4, is similar to the way it works with parameter argument in the function parenthesis. example:
    is_age_int(age: int):
    if age:
        return True
    else:
        return False

6 - Type Hints - Using the arrow "->" after the parenthesis in a function, example:
    you_good(age: int) -> bool:
will tell Python what it expected to receive when the function process is over.