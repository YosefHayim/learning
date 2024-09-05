# In order to create a function in Python we use the word def then call it to a variable and a parenthesis
def myfunction():
    # Everything here is indented and belongs to the function
    # This function won't be executed unless I call it.
    print("Hi this is first python function")

# myfunction() # Calling the function.

# Hurdle 1:
#
# def move_right():
#     turn_left()
#     turn_left()
#     turn_left()
#
# def one_cycle():
#     move()
#     if wall_in_front():
#         turn_left()
#         move()
#         move_right()
#
#     if not wall_in_front():
#         move()
#         move_right()
#         move()
#         if wall_in_front():
#             turn_left()
#
# one_cycle()
# one_cycle()
# one_cycle()
# one_cycle()
# one_cycle()
# one_cycle()

# While loop, a loop that continue to looping while condition is true, or it is false.
# Example of the structure of a while loop.
something_is_true = 0
while something_is_true < 2:
    print("I love python")
    something_is_true += 1
    # Do something repeatedly

# Hurdle 2
# def move_right():
#     turn_left()
#     turn_left()
#     turn_left()

# def one_cycle():
#     move()
#     if wall_in_front():
#         turn_left()
#         move()
#         move_right()

#     if not wall_in_front():
#         move()
#         move_right()
#         move()
#         if wall_in_front():
#             turn_left()

# while not at_goal():
#     one_cycle()

# Hurdle 3
# def jump():
#     if is_facing_north() and not wall_on_right():
#         turn_left()
#         turn_left()
#         turn_left()
#         move()

#     elif is_facing_north() and wall_on_right():
#         move()
#         turn_left()
#         turn_left()
#         turn_left()

#     elif front_is_clear():
#         move()

#     elif not front_is_clear():
#         turn_left()
#         if wall_on_right():
#             move()
#             turn_left()
#             turn_left()
#             turn_left()
#             move()
#             if not wall_on_right():
#                 turn_left()
#                 turn_left()
#                 turn_left()
#                 move()
#                 turn_left()
#

# while not at_goal():
#     jump()

# Hurdle 4
# def turn_right():
#     turn_left()
#     turn_left()
#     turn_left()

# def jump():
#     turn_left()
#     move()
#     turn_right()
#     move()
#     turn_right()
#     move()
#     turn_left()


# while not at_goal():
#     if front_is_clear():
#         move()
#     elif wall_in_front():
#         turn_left()
#         while wall_on_right() and is_facing_north():
#             move()
#             if is_facing_north() and not wall_on_right():
#                 turn_left()
#                 turn_left()
#                 turn_left()
#                 move()
#                 turn_left()
#                 turn_left()
#                 turn_left()
#                 while not wall_in_front() and not at_goal():
#                     move()

# Maze:
# while not at_goal():
#
#     if front_is_clear() and right_is_clear():
#         turn_left()
#         turn_left()
#         turn_left()
#         move()
#
#     elif front_is_clear():
#         move()
#
#     elif right_is_clear():
#         turn_left()
#         turn_left()
#         turn_left()
#         move()
#
#     elif wall_in_front():
#         turn_left()
#         if wall_in_front():
#             turn_left()
#         else:
#             move()
#
#     else:
#         pause()
#

