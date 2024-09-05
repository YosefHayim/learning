import random
word_list = ["aardvark", "baboon", "camel"]

chosen_word = random.choice(word_list)
print(chosen_word)

# TODO-1: Create a "placeholder" with the same number of blanks as the chosen_word
placeholder = "_" * len(chosen_word)
print(placeholder)
guess = input("Guess a letter: ").lower()

# TODO-2: Create a "display" that puts the guess letter in the right positions and _ in the rest of the string.
display = []
num = -1
for letter in chosen_word:
    num += 1
    display += "_"
    if letter == guess:
        display[num] = guess

print(display)
