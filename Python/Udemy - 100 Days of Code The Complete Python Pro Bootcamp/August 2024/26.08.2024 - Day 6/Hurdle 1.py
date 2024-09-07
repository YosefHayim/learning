
def move_right():
    turn_left()
    turn_left()
    turn_left()

def one_cycle():
    move()
    if wall_in_front():
        turn_left()
        move()
        move_right()

    if not wall_in_front():
        move()
        move_right()
        move()
        if wall_in_front():
            turn_left()

one_cycle()
one_cycle()
one_cycle()
one_cycle()
one_cycle()
one_cycle()
################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
