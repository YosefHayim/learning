# Example to call global scope while indented
game_level = 3
enemies = ['skeleton','zombies','werewolf']

# if game_level < 5:
#     new_enemy = enemies[0]

# This is accessible even when it's indented
# print(new_enemy)

"""The outside global variables are possible to be fetched 
in the local scope because it's located in the global scope."""
def create_enemy():
    if game_level < 5:
        new_enemy = enemies[0]

"""This isnt possible to print the new_enemy since 
it's in the local scope of the function."""
# print(new_enemy) #This is error.


# Coding Exercise 12: Prime number check
def is_prime(num):
    if num <= 1:
        return False  # 0, 1, and negative numbers are not prime

    times_equal_zero = 0

    for i in range(2, num):
        if num % i == 0:
            times_equal_zero += 1

    if times_equal_zero > 0:
        return False  # Not prime
    else:
        return True  # Prime

# Example for using the global scope function inside
def function():
    global game_level
    print("Before using the global scope the game_level was: ", game_level)

    game_level += 1
    print("Current game level after using the global scope now it's: ",game_level)

# function()

"""
 In Python, when you use the return statement inside a function, 
 it returns the result to the caller. If you call the function 
 and assign it to a variable, the variable will store the 
 outcome of that function.
"""
def add(a, b):
    return a + b

result = add(5, 3)  # result will store the value 8
# print(result)  # Output: 8
