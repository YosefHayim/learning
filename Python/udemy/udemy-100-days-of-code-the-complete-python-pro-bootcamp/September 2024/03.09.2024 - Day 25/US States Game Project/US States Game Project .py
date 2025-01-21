import turtle
import pandas

screen = turtle.Screen()
screen.title("U.S States Game")
image_path = "blank_states_img.gif"
# Adding the image to the screen.
screen.addshape(image_path)
# Show the image on the turtle screen.
turtle.shape(image_path)

FONT = ("Arial", 8, "normal")
ALIGN = "center"

# Read the data
data = pandas.read_csv("C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/03.09.2024 - Day 25/US States Game Project/50_states.csv")
data_list = data.values.tolist()

# List to keep track of states NOT GUESSED
not_guessed_states = data['state'].tolist()  # All states at the start

# List to keep track of guessed state names
guessed_states = []

def us_states_game_project():
    total_states = 50
    score = 0

    while score < total_states:
        # Ask the user for a state name
        answer_state = screen.textinput(title=f"{score}/{total_states} States Correct", prompt="What's another state's name? (Type 'Exit' to stop)").title()

        if answer_state is None or answer_state == 'Exit':
            # When the user types 'Exit', save the remaining not guessed states to a file
            with open("not_guessed_states.txt", mode="w") as file:
                for state in not_guessed_states:
                    file.write(f"{state}\n")
            print("Remaining states saved to 'not_guessed_states.txt'.")
            break

        # Check if the state has already been guessed
        if answer_state in guessed_states:
            screen.textinput(title="Already Found", prompt=f"You've already guessed {answer_state}. Please provide another state.")
            continue  # Skip to the next iteration

        for i in data_list:
            if i[0] == answer_state:
                x_location = int(i[1])
                y_location = int(i[2])

                # Create a new turtle to write the state name at the x, y coordinates
                state_turtle = turtle.Turtle()
                state_turtle.hideturtle()  # Hide the turtle cursor
                state_turtle.penup()  # Lift the pen so no drawing occurs
                state_turtle.goto(x_location, y_location)  # Move to the state's coordinates
                state_turtle.write(answer_state, align=ALIGN, font=FONT)  # Write the state's name

                # Add the guessed state to the list of guessed states
                guessed_states.append(answer_state)

                # Remove the guessed state from the not guessed list
                if answer_state in not_guessed_states:
                    not_guessed_states.remove(answer_state)

                # Update the score and the title prompt
                score += 1
                break
        else:
            print(f"Your answer: '{answer_state}' is not valid.")

    print("Game Over!")

us_states_game_project()
