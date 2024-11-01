# Learning about Tkinter
from tkinter import *

# Use the tkinter class like in the turtle package
window = Tk()
window.title("First GUI Program")
window.minsize(width=500,height=300)
# Adding a padding from the width and height of the GUI, can be also use the same confing to gui input,buttons,entries etc...
window.config(padx=20,pady=20)

# Assign the function to the variable button which is named click me and then print it.
def button_clicked():
    print("Button got clicked")

# Label
my_label = Label(text="New Text", font=("Arial", 24, "bold"))
my_label.grid(column=0,row=0)

# Input
input = Entry(width=10)
input.get()
input.grid(column=1,row=1)

# Button
button = Button(text="Click Me",command=button_clicked)
button.grid(column=1,row=1)

# Button 2
buttonTwo = Button(text="New Button",command=button_clicked)
buttonTwo.grid(column=2,row=0)

# Entry
input_two = Entry(width=10)
input_two.get()
input_two.grid(column=3,row=2)

# Must be at the bottom to contain the GUI open
window.mainloop()