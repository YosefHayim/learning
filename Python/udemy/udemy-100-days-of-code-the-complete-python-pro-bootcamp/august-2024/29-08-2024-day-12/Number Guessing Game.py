import random
from art import logo
print(logo)
print("Welcome to the Number Guessing Game! ")
print("I am thinking of a number between 1 and 100. ")
random_number = random.randint(1, 100)
is_easy_hard = input("Choose a difficulty. Type 'easy' or 'hard: ")

def game_level(difficulty):
    if is_easy_hard == 'easy':
        guess_attempts = 10

    else:
        guess_attempts = 5
    return guess_attempts


tries_left = game_level(is_easy_hard)

print(f"You have {tries_left} remaining to guess the number. ")

make_a_guess = int(input("Make a guess: "))

def guess_the_number():
    # Using the global method to use the global scope variables
    global tries_left, make_a_guess

    while tries_left != 1:
        if random_number == make_a_guess:
            print("You won")
            print(f"You are correct, the number is {random_number}")
            return
        elif random_number != make_a_guess:
            if make_a_guess > random_number:
                print("Too high. ")
                print("Guess again. ")
                tries_left -= 1
                print(f"You have {tries_left} remaining to guess the number. ")
                make_a_guess = int(input("Make a guess: "))

            elif make_a_guess < random_number:
                print("Too low. ")
                print("Guess again. ")
                tries_left -= 1
                print(f"You have {tries_left} remaining to guess the number. ")
                make_a_guess = int(input("Make a guess: "))

        elif make_a_guess > 100 or make_a_guess < 0:
            print("Your number isn't valid must be within the range.")
            make_a_guess = int(input("Make a guess: "))

    else:
        if make_a_guess > random_number:
            print("Too high. ")
            print("You've run out of guesses, you lose. ")

        elif make_a_guess < random_number:
            print("Too low. ")
            print("You've run out of guesses, you lose. ")


guess_the_number()