import os
import pandas as pd
import random
from tkinter import *

file_path = "C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/data/french_words.csv"
to_learn_file = "C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/data/words_to_learn.csv"

# Check if the words_to_learn.csv exists. If it does, use that; otherwise, use the original french_words.csv
if os.path.exists(to_learn_file):
    data_frame = pd.read_csv(to_learn_file)
else:
    data_frame = pd.read_csv(file_path)

# Convert the data to a list of dictionaries
data_dict = data_frame.to_dict(orient='records')
current_word = {}

def random_word():
    global current_word
    if data_dict:  # Ensure there are words to learn
        current_word = random.choice(data_dict)
        french_word = current_word["French"]
        canvas.itemconfig(word_test, text=french_word, fill="black")  # Show French word
        language_type_name.config(text="French")
        canvas.itemconfig(card_image, image=card_front_img)  # Show front card
        window.after(3000, flip_card)  # Flip after 3 seconds
    else:
        word_test.config(text="All done!", fill="black")

def flip_card():
    english_word = current_word["English"]
    canvas.itemconfig(word_test, text=english_word, fill="white")  # Show English word
    language_type_name.config(text="English")
    canvas.itemconfig(card_image, image=card_back_img)  # Show back card

def known_word():
    # Remove the current word from the list
    if current_word in data_dict:
        data_dict.remove(current_word)
        # Save the remaining words to words_to_learn.csv
        pd.DataFrame(data_dict).to_csv(to_learn_file, index=False)
    random_word()  # Show the next random word

BACKGROUND_COLOR = "#B1DDC6"
window = Tk()
window.title("Flashy")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

# Load images
card_front_img = PhotoImage(file="C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/images/card_front.png")
card_back_img = PhotoImage(file="C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/images/card_back.png")

# Canvas setup
canvas = Canvas(width=800, height=525, bg=BACKGROUND_COLOR, highlightthickness=0)
card_image = canvas.create_image(400, 263, image=card_front_img)
canvas.grid(column=1, row=0)

# Labels
language_type_name = Label(text="French", font=("Ariel", 40, "italic"), bg=BACKGROUND_COLOR, highlightthickness=0)
language_type_name.place(x=300, y=100)
word_test = canvas.create_text(400, 263, text="Word", font=("Ariel", 60, "bold"), fill="black")

# Buttons
right_image_button = PhotoImage(file="C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/images/right.png")
button_right = Button(image=right_image_button, highlightthickness=0, bg=BACKGROUND_COLOR, command=known_word)  # ✅ button
button_right.place(x=600, y=420)

left_image_button = PhotoImage(file="C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 31/images/wrong.png")
button_left = Button(image=left_image_button, highlightthickness=0, bg=BACKGROUND_COLOR, command=random_word)  # ❌ button
button_left.place(x=50, y=420)

random_word()  # Start with a random word
window.mainloop()
