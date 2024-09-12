# from flask import Flask
#
# app = Flask(__name__)
#
# def make_bold(func):
#     def wrapper():
#         return f'<b>{func()}</b>'
#     return wrapper
#
# def make_emphasis(func):
#     def wrapper():
#         return f'<em>{func()}</em>'
#     return wrapper
#
# def make_underlined(func):
#     def wrapper():
#         return f'<u>{func()}</u>'
#     return wrapper
#
# @app.route('/')
# def hello_world():
#     return 'Hello, World!'
#
# @app.route("/bye")
# def say_bye():
#     return "Bye"
#
# @app.route("/username/<name>")
# def greet(name):
#     return f'Hello {name}'
#
# if __name__ == "__main__":
#     app.run(debug=True)

# Advanced decorators challenge
def logging_decorator(func):
    def wrapper(*args):
        print(f"You called {func.__name__}{args}")
        result = func(*args)
        print(f"It returned: {result}")
        return result

    return wrapper


@logging_decorator
def a_function(*args):
    return sum(args)


a_function(1, 2, 3)