# Arguments with default values
def my_function(a=1,b=2,c=3):
    pass

# can create a function without adding arguments to it since the parameters receive it.
# my_function()

# If I want to update one of these parameters than I can simply do, which will than use this argument instead of the parameter I set it to.
# my_function(a=3)

# Unlimited Arguments using the * asterisk, *args lets you pass any number of arguments to the function.
def add(*args):
    # Can also print or do a specific thing with an argument at an index position
    # print(args[1])

    # *args allows you to pass a variable number of arguments to the function.
    sum = 0
    # We iterate over all the values in the args tuple
    for n in args:
        sum += n

    # print(sum)


# This function call passes 5 arguments to the add() function, which are packed into args.
# add(10, 20, 30, 40, 70)  # Output: 170

# **kwargs stands for "keyword arguments" creating unlimited keywords arguments that converted to a dictionary.
def calculate(n, **kwargs):
    # print(kwargs)
    # for key,value in kwargs.items():
    #     print(key,value)
    n += kwargs["add"]
    n *= kwargs["multiply"]
    # print(n)
# calculate(add=3,multiply=5)
# calculate(2,add=3,multiply=5)

class Car:
    def __init__(self,**kw):
        self.make = kw.get("make")
        self.model = kw.get("model")
        # if a key doesn't show in the dictionary I can use the get method specifically ment for the dictionary instead of returning error return none to indicate this isn't exist in the dictionary.
        self.year = kw.get("color")

my_car = Car(make="Nissan")

# without passing an argument to the model I will get a None response instead of error using the get method to the dictionary.
print(my_car.model) # Output: None