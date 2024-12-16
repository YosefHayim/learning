# Try open this file, it won't cause it's not exist.
# try:
#     file = open("a_file.txt")
#     a_dictionary = {"key":"value"}
#     print(a_dictionary["key"])
#
#     # The first code line exist, and it does work but the second and third doesn't therefore we need to catch the error and that's why we can do that with a specific exception caught method.
#     # example is to use the FileExistsError
# except FileExistsError:
#     file = open("a_file.txt",mode="w")
#     file.write("Something")
#
#     # example is to use the second except which is KeyError, I can write many excepts as I want
# except KeyError as error_message:
#         print(f"That key: {error_message} doe not exist")
#
#     # Else there were no exceptions so far, so we do something here.
# else:
#     content = file.read()
#     print(content)
#
#     # Finally we arrived here.
# finally:
#     print('File was closed.')

# # Raise error without the try expect blocks
# height = float(input("Height: "))
# weight = float(input("Weight: "))
#
# if height > 3:
#     raise ValueError("Human height should not be over 3 meters.")

#IndexError Handling
fruits = ["Apple", "Pear", "Orange"]

# Catch the exception and make sure the code runs without crashing.
def make_pie(index):
    try:
        fruit = fruits[index]
        print(fruit + " pie")
    except IndexError:
        print("Fruit pie")

# make_pie(4)

#Key Error Handling
facebook_posts = [
    {'Likes': 21, 'Comments': 2},
    {'Likes': 13, 'Comments': 2, 'Shares': 1},
    {'Likes': 33, 'Comments': 8, 'Shares': 3},
    {'Comments': 4, 'Shares': 2},  # No Likes
    {'Comments': 1, 'Shares': 1},  # No Likes
    {'Likes': 19, 'Comments': 3}
]

# def count_likes(posts):
#     total_likes = 0
#     for post in posts:
#         try:
#             total_likes += post['Likes']
#         except KeyError:
#             # If 'Likes' is missing, we skip that post without adding anything
#             pass
#     return total_likes
#
# # Test the function
# print(count_likes(facebook_posts))  # Should output the sum of likes, ignoring posts without 'Likes'





