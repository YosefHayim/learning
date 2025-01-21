while not at_goal():
    
    if front_is_clear() and right_is_clear():
        turn_left()
        turn_left()
        turn_left()
        move()
    
    elif front_is_clear():
        move()
    
    elif right_is_clear():
        turn_left()
        turn_left()
        turn_left()
        move()
    
    elif wall_in_front():
        turn_left()
        if wall_in_front():
            turn_left()
        else:
            move()
    
    else:
        pause()
        
        
       
################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
