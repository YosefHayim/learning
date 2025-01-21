import random
from art import logo, vs
from game_data import data

print(logo)


def get_random_numbers():
    """Gets two random numbers within the length of game_data list which is 0 to 50 and make sure they both not equal and return to the global scope in a list."""
    choice_a = random.randint(0, len(data) - 1)
    choice_b = random.randint(0, len(data) - 1)
    while choice_a == choice_b:
        choice_b = random.randint(0, len(data) - 1)
    return [choice_a, choice_b]


def format_choice(num1, num2):
    """Printing the data and storing the follower count score to a list."""
    print(f"Compare A: {data[num2]['name']}, a {data[num2]['description']}, from {data[num2]['country']}")
    choice_a = data[num1]['follower_count']
    choice_b = data[num2]['follower_count']
    print(vs)
    print(f"Compare B: {data[num1]['name']}, a {data[num1]['description']}, from {data[num1]['country']}")
    return [choice_b, choice_a]


def who_higher_score(num1, num2):
    if num1 > num2:
        return num1, num2
    elif num1 < num2:
        return num1, num2
    else:
        print(f"Draw bug")
        return num1, num2


def ask_user_choice(num1, num2, user_answer, points):
    if user_answer == 'a' and num1 > num2:
        points += 1
        print(f"You are right, Current score: {points}")
        return points, True
    elif user_answer == 'b' and num1 < num2:
        points += 1
        print(f"You are right, Current score: {points}")
        return points, True
    else:
        print(f"Sorry, that's wrong. Final score: {points}")
        return points, False


game_on = True
score = 0
number1, number2 = get_random_numbers()

while game_on:
    show_data = format_choice(num1=number1, num2=number2)
    number_one = show_data[0]
    number_two = show_data[1]
    num1, num2 = who_higher_score(number_one, number_two)
    user_answer = input("Who has more followers? Type 'A' or 'B': ").lower()
    while user_answer != 'a' and user_answer != 'b':
        user_answer = input("Invalid input. please type 'A' or 'B': ").lower()
        if user_answer == 'a':
            user_answer = 'a'
            break
        if user_answer == 'b':
            user_answer = 'b'
            break

    score, game_on = ask_user_choice(points=score, num1=num1, num2=num2, user_answer=user_answer)

    if game_on:
        # If the user chose 'A' and was correct, then A (number2) becomes the new choice for B
        # If the user chose 'B' and was correct, then B (number1) becomes the new choice for A
        if user_answer == 'a':
            number1 = number2
            number2 = random.randint(0, len(data) - 1)
            while number1 == number2:
                number2 = random.randint(0, len(data) - 1)
        else:
            number2 = number1
            number1 = random.randint(0, len(data) - 1)
            while number1 == number2:
                number1 = random.randint(0, len(data) - 1)
