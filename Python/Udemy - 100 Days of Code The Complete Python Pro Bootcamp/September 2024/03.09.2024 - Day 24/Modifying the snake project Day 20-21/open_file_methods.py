# # Opening the file.
# file = open("my_file.txt")
#
# contents = file.read()
#
# print(contents)
# # If I don't write the method .close to the file then will Python keep open it on my computer without knowing.
# file.close()

# # The popular method Python developers open file which is opening and closing it in the same time.
# with open("my_file.txt") as file:
#     contents = file.read()
#     print(contents)

# How to open a file with the w mode which is equal to write and rewrite the file data again and then close the file.
# with open("my_file.txt", mode="w") as file:
#     file.write("This is the new text I wanted to write.")

# How to open a file with the mode which is equal to add text to the file and write extra data again and then close the file.
# with open("my_file.txt", mode="a") as file:
#     # Using the /n inside the double quotes is allowing me to go another line like in real Python code.
#     file.write("/nThis is a new line.")
#
# # If the file doesn't exist it will create it with the w mode.
# with open("my_newfile.txt", mode="w") as file:
#     file.write("This is the new file.")

# How to locate a file from other location path.
with open(
        "/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/03.09.2024 - Day 24/Modifying the snake project Day 20-21/my_file.txt", mode="r") as file:
    print(file.read())