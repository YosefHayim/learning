def greet():
    print("Hi")
    print("Hi")
    print("Hi")

# greet()

# Functions with input
def greet_with_name(name):
    print(f"Hello {name}")
    print(f"How do you do {name}?")

# greet_with_name("Jack Bauer")

# Function that allows for inputs.
# data inside the parenthesis which is (name,country,city) are called parameters.
def personality(name,country,city):
    print(f"How are you {name}? ")
    print(f"Are you from {country} ")
    print(f" Thats funny I am living at {city} aswell! ")

# And over here the data inside the parenthesis called arguments which are what been used for the parameters.
# personality("Joseph","Israel","holon")

# Coding Exercise 7:
def life_in_weeks(age):
    years_left = 90 - age
    x = years_left * 52

    print(f"You have {x} weeks left.")


# Demonstrate the use of keyword arguments (name="Joseph",country="Israel",city = "Holon") without same ordinary.
# personality(city="Holon", name="Josepihno",country="Isrealos")

# Coding Exercise 8, Love Calculator:
def calculate_love_score(name1, name2):
    word1 = "TRUE"
    word2 = "LOVE"
    combined_word = name1.upper() + name2.upper()
    num = 0
    num2 = 0

    # Count letters in "TRUE"
    for i in word1:
        letter_count = combined_word.count(i)
        num += letter_count
        print(f"The letter {i} occurs {letter_count} times in combined names")
    str_num = str(num)

    # Count letters in "LOVE"
    for i in word2:
        letter_count = combined_word.count(i)
        num2 += letter_count
        print(f"The letter {i} occurs {letter_count} times in combined names")
    str_num2 = str(num2)

    # Combine the totals into a 2-digit love score
    love_score = str_num + str_num2
    print(f"Love Score = {love_score}")

calculate_love_score("Angela Yu", "Jack Bauer")
