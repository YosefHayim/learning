import random

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))

# Easy Version:
# generate_password = ""
# for i in range(0,nr_letters):
#     generate_password += letters[i]
#
# for i in range(0,nr_symbols):
#     generate_password += numbers[i]
#
# for i in range(0,nr_symbols):
#     generate_password += symbols[i]
#
# print(f"generate_password is: '{generate_password}'")

# Hard Version:
generate_password = ""

for i in range(0,nr_letters):
    random.shuffle(letters)
    generate_password += letters[i]

for i in range(0,nr_numbers):
    random.shuffle(numbers)
    generate_password += letters[i]

for i in range(0,nr_symbols):
    random.shuffle(symbols)
    generate_password += numbers[i]

print(f"generate_password is: '{generate_password}'")

