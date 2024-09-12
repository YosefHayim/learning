import os

from flask import Flask
import random

app = Flask(__name__)

random_num = random.randint(0,9)

def make_response_bold(func):
    def wrapper(*args, **kwargs):
        return f'{func(*args, **kwargs)}'  # Pass arguments to the original function
    return wrapper

@app.route('/')
def guess_the_number():
    return '''
        <h1>Guess a number between 0 and 9.</h1>
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXVlejZxYzhwa2xkdjB2bHl3dG84NmZ0ajVkeHpod3VubHVib2VjbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JBRR744Ozd0xLhksLw/giphy.webp" alt="Guess the number GIF">
    '''

@app.route("/<int:num>/")
def is_guess_number(num):
    if num == random_num:
        return f'''<h1>You are correct the num is: {num}!</h1>
            <img src="https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif" alt="Correct number guessed">
                '''

    elif num != random_num and num < random_num:
        return f'''<h1>You guessed too low... </h1>
                  <img src="https://media.giphy.com/media/jD4DwBtqPXRXa/giphy.gif" alt="Guess the number GIF">
                '''
    elif num > random_num:
        return f'''<h1>You guessed too high...</h1>
                <img src="https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif" alt="Guess the number GIF">
                '''

@app.route('/shutdown')
def shutdown():
    os._exit(0)  # Exits the Flask server
    return "Server shutting down..."

print(random_num)


if __name__ == "__main__":
    app.run(debug=True)
