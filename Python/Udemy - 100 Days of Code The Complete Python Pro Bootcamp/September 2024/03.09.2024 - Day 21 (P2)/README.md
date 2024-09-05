Key points of day 21:
1 - Learning about class inheritance, slicing and finishing the snake game.
2 - Another feature of Object-Oriented Programming calls: Class inheritance.
3 - Class inheritance means like a nested loop. 
    example is making a chef class and add some of that chef methods to a new Class that in my decision is a lower class than it, a su-chef for example.
    in order to do, so I need to add another initialize to the subclass by the following for example:
    Example:

    class Dog:
        def __init__(self):
            self.temperament = "loyal"
     
        def bark(self):
            print("Woof, woof!")
     
    class Labrador(Dog):
        def __init__(self):
            super().__init__()
            self.is_a_good_boy = True
     
        def bark(self):
            super().bark()
            print("Greetings, good sir. How do you do?")

    Using this code lines:
    sparky = Labrador()
    sparky.bark()
    
    will print these:
    Woof,woof!
    Greetings,good sir. How do you do?

4 - Slicing is a way to get a specific part or range of a list by using the slice method or slicing syntax. It allows you to select a portion of the list, starting from one index and ending at another.
    Example:
    my_list = [10, 20, 30, 40, 50]
    Output:
    slice_of_list = my_list[1:4]  # Gets the elements from index 1 to 3 (20, 30, 40)
    
5 - Slicing allows you to extract specific parts of a list using the formula [start:end:step].
6 - Slicing is also applicable on tuples
    Example:
    my_tuple = (10, 20, 30, 40, 50, 60, 70)
    Output:
    slice_of_tuple = my_tuple[1:6:2]

7 - Seven Reasons why I want to become a developer:
    A. Built amazing things for myself and for people from scratch.
    B. Improve my brain understanding, knowledge and principals of computer programming.
    C. Being able to earn good amount of money to what I am worthy and basically learn each day new things  which stands for my dopamine additivity.
    D. Invest in my finance portfolio and become wealthy person.
    E. Stop worrying about buying basic stuff like food and being able to afford renting or buying apartment.
    F. built a career and enjoy the journey of learning how to program.