def turn_right():
    turn_left()
    turn_left()
    turn_left()
    
def jump():
    turn_left()
    move()
    turn_right()
    move()
    turn_right()
    move()
    turn_left()
       
while not at_goal():
    if front_is_clear():
        move()
    elif wall_in_front():
        turn_left()
        while wall_on_right() and is_facing_north():
            move()
            if is_facing_north() and not wall_on_right():
                turn_left()
                turn_left()
                turn_left()
                move()
                turn_left()
                turn_left()
                turn_left()
                while not wall_in_front() and not at_goal():
                    move()

################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
