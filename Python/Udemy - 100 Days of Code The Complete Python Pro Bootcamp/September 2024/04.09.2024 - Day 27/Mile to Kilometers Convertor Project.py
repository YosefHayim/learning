import math
from tkinter import *

def miles_to_km():
    try:
        # Get the input data and try to convert it to a float
        data = input_miles.get()
        miles = float(data)

        # Convert miles to kilometers and round down
        km = math.floor(miles * 1.60934)

        # Update the km_value label with the result
        km_value.config(text=f"{km}")
        error_label.config(text="")  # Clear the error if successful
    except ValueError:
        # Display an error message if the input is not a valid float
        error_label.config(text="Please enter a valid number", fg="red")

# Create the window
window = Tk()
window.title("Mile to Km Converter")
window.minsize(width=300, height=200)
window.config(padx=20, pady=20)

FONT = ("Arial", 8, "bold")

# Configuring the grid layout to expand and center
window.grid_columnconfigure(0, weight=1)
window.grid_columnconfigure(1, weight=1)
window.grid_columnconfigure(2, weight=1)

# Miles Label
miles_label = Label(text="Miles", font=FONT)
miles_label.grid(column=2, row=0)

# Input for miles
input_miles = Entry(width=10, justify='center')
input_miles.grid(column=1, row=0)

# Km Text
km_label = Label(text="Km", font=FONT)
km_label.grid(column=2, row=1)

# Converted Kilometers Label (initially set to 0)
km_value = Label(text="0", font=FONT)
km_value.grid(column=1, row=1)

# Calculate Button
button = Button(text="Calculate", command=miles_to_km)
button.grid(column=1, row=3)

# Error label (initially empty)
error_label = Label(text="", font=FONT)
error_label.grid(column=1, row=2)

# Start the window loop
window.mainloop()
