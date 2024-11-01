## Day 21: Key Takeaways

1. **Class Inheritance, Slicing, and Completing the Snake Game**  
   - Focused on learning class inheritance, slicing techniques, and successfully finished the Snake game project.

2. **Class Inheritance**  
   - Class inheritance allows one class to inherit methods and attributes from another, much like a nested loop in structure.  
     Example:
     ```python
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
     
     sparky = Labrador()
     sparky.bark()
     ```
     **Output:**
     ```
     Woof, woof!
     Greetings, good sir. How do you do?
     ```

3. **Slicing**  
   - Slicing allows extracting a specific portion of a list using the syntax `[start:end:step]`.  
     Example for lists:
     ```python
     my_list = [10, 20, 30, 40, 50]
     slice_of_list = my_list[1:4]  # Output: [20, 30, 40]
     ```

   - Slicing can also be applied to tuples.  
     Example for tuples:
     ```python
     my_tuple = (10, 20, 30, 40, 50, 60, 70)
     slice_of_tuple = my_tuple[1:6:2]  # Output: (20, 40, 60)
     ```

### Seven Reasons Why I Want to Become a Developer:

A. Build amazing things from scratch for myself and others.  
B. Improve my brain’s understanding, knowledge, and principles of computer programming.  
C. Earn a good income while learning new things daily, which satisfies my desire for continuous improvement.  
D. Invest in my financial portfolio and become a wealthy individual.  
E. Stop worrying about basic needs like food and housing, and afford an apartment.  
F. Build a career and enjoy the learning journey of programming.