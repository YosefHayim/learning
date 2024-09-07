Key points of day 16:
1 - Today learning Object-Oriented Programming (OOP)
2 - The pros in writing code in different files called "Modules".
3 - There is a turtle graphics from a library in Python.
4 - Using the dot after the module will provide me all the possibilities to fetch from that module
5 - Writing this import "from turtle import Turtle" way is more specifically and organized then importing the entire module, this imports specific method.
6 - I can  use with a comma a double code in one line as Python reads this in a separate code line each.
    Example from the turtle library: timmy.shape("turtle"),timmy.color("blue") --> This is for setting the turtle color to blue
7 - Python packages are collections of pre-written code modules bundled together by other developers, which you can easily install and use in your own projects to save time and effort when performing common or complex tasks.
8 - The website pypi.org is the official website of packages that developers has been created for the high programming language Python.
9 - How to install in Pycharm a package using the settings: go to pythonProject1 --> Python interpreter --> + sign search for the library.
10 - another method to install is going to the Python Packages in the icons tabs from left side of the IDE.
11 - using packages are really decrease the amount of codes I need to write in order to built projects. this is signally one of the important things in coding.
12 - Had a small error made it 95% of this project, the 5% were missing a one variable that I thought is a bug from Angela Yu side.


A shortcut of what is OOP:
Yes, you're on the right track! Here's a breakdown to clarify:
### Similarities to Functions:
- **Functions**: In procedural programming, you write **functions** to perform specific tasks. You can reuse these functions whenever you need them.
  
  Example:
  def make_coffee():
      print("Making coffee.")
      
  make_coffee()  # Reuse the function whenever needed
  ```

### What OOP Adds:
OOP goes further by grouping related **functions** (now called **methods**) together inside a **class**. But it also adds more features that make the code more **dynamic** and **reusable**.

### Key Differences:
1. **Grouping**: Instead of having separate functions floating around, OOP groups these related functions inside **classes** (blueprints for objects). A **class** can represent something like a "Waiter" or "Car," and it can have multiple methods that belong to it.

   - Example:
     class CoffeeMachine:
         def make_coffee(self):
             print("Making coffee.")
         
         def clean_machine(self):
             print("Cleaning the coffee machine.")
     ```

   Here, the `CoffeeMachine` class groups both **methods** (`make_coffee` and `clean_machine`), keeping related functionality together.

2. **Objects**: From this class, you can create **objects** that represent specific instances. For example, you could have multiple coffee machines, and each machine is its own **object**.

   - Example:
     my_machine = CoffeeMachine()
     my_machine.make_coffee()  # This machine makes coffee
     ```

3. **State (Attributes)**: Classes also store **data** inside them (called **attributes**) which functions on their own don't. So, a coffee machine object could have attributes like `brand`, `status`, etc.

   - Example:
     class CoffeeMachine:
         def __init__(self, brand):
             self.brand = brand
         
         def make_coffee(self):
             print(f"Making coffee with {self.brand} coffee machine.")
     
     my_machine = CoffeeMachine("Nespresso")
     my_machine.make_coffee()  # Prints: Making coffee with Nespresso coffee machine.
     ```

4. **Reusability**: You can reuse a class in multiple ways, and it's easier to expand. For example, you can **inherit** from a class to make a new one with some extra features, without rewriting all the code.

   - Example:
     class EspressoMachine(CoffeeMachine):
         def make_espresso(self):
             print(f"Making espresso with {self.brand}.")
     
     my_espresso_machine = EspressoMachine("Breville")
     my_espresso_machine.make_coffee()  # Still makes coffee
     my_espresso_machine.make_espresso()  # Now can also make espresso
     ```

### Summary:
- **Yes, OOP is like functions** but taken to the next level.
- It **organizes** related functions (methods) inside classes.
- It lets you store **attributes** (data) in these classes.
- It helps you create **dynamic** and **reusable** code that's easier to maintain, especially for large projects.

OOP is a way to **group functions and data** together, making them work as part of an object, which can be reused and extended easily.