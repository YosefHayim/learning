def jump():
    
    if is_facing_north() and not wall_on_right():
        turn_left()
        turn_left()
        turn_left()
        move()

    elif is_facing_north() and wall_on_right():
        move()
        turn_left()
        turn_left()
        turn_left()
    
    elif front_is_clear():
        move()
        
    elif not front_is_clear():
        turn_left()
        if wall_on_right():
            move()
            turn_left()
            turn_left()
            turn_left()
            move()
            if not wall_on_right():
                turn_left()
                turn_left()
                turn_left()
                move()
                turn_left()
                   
        
while not at_goal():
    jump()
################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
