from tkinter import *
import secrets
import string
from tkinter import messagebox
import json

# ---------------------------- Search for data ------------------------------- #
def find_password():
    website = website_input.get()  # User's website input
    try:
        with open("data.json", mode="r") as file:
            # Reading old data
            data = json.load(file)

        if website in data:
            # Accessing the correct data for the entered website
            messagebox.showwarning(
                title="Found Data",
                message=f'Your info:\n1. Website: {website}\n2. Password: {data[website]["password"]}\n3. Email: {data[website]["email"]}'
            )
        else:
            messagebox.showinfo(title="Error", message="No details for the website exist.")

    except FileNotFoundError:
        messagebox.showinfo(title="Error", message="No Data File Found")



# ---------------------------- PASSWORD GENERATOR ------------------------------- #
PASSWORD_LENGTH = 15
def password_generator():
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(secrets.choice(characters) for _ in range(PASSWORD_LENGTH))
    password_input.delete(0, END)  # Clear the previous password
    password_input.insert(0, password)  # Insert new password
    return password

# ---------------------------- ADD ENTRY FUNCTION ------------------------------- #
def save_to_file():
    file_path = "C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/05.09.2024 - Day 30/Password_manager_optimizations"
    website = website_input.get()
    email = email_username_input.get()
    password = password_input.get()
    new_data = {
        website: {
            "email": email,
            "password":password,

        }
    }

    # If any of the inputs are empty, return a message to the user
    if len(website) == 0 or len(email) == 0 or len(password) < 6:
        messagebox.showwarning(title="Missing Information", message="Please fill all the inputs in order to proceed:/n1. Either you didn't provided website name/n2. Password length must be above 6 letters.")

    #If one of the datas has not been provided on the GUI
    #is_ok = messagebox.askokcancel(title=website,message=f"These are the detail entered:Website: {website}\nEmail: {email}\nPassword: {password}\n")
    else:
        try:
            # Try reading the existing JSON file
            with open("data.json", mode="r") as file:
                # Reading old data
                data = json.load(file)
        except FileNotFoundError:

            with open("data.json",mode="w") as file:
                json.dump(new_data,file,indent=4)
        else:

            # Updating the old data with new data
            data.update(new_data)
            print('Data updated')

            # Saving the updated data back to the file
            with open("data.json", mode="w") as file:
                json.dump(data, file, indent=4)

        finally:
            # Clear the input fields after saving
            website_input.delete(0, END)
            password_input.delete(0, END)
            print('Data appended as JSON')
# ---------------------------- UI SETUP ------------------------------- #
FONT = ("Arial", 10, "normal")
window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=20)

# Logo image position
canvas = Canvas(width=200, height=200)
mypass_logo = PhotoImage(file="C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/05.09.2024 - Day 30/Password_manager_optimizations/logo.png")
canvas.create_image(100, 100, image=mypass_logo)
canvas.grid(column=1, row=0)

# Labels
website = Label(text="Website:", font=FONT)
website.grid(row=1)
email_username = Label(text="Email/Username:", font=FONT)
email_username.grid(row=2)
password = Label(text="Password:", font=FONT)
password.grid(row=3)

# Entries
website_input = Entry(width=35)
website_input.grid(column=1, row=1, columnspan=2)
website_input.focus()

email_username_input = Entry(width=35)
email_username_input.grid(column=1, row=2, columnspan=2)
email_username_input.insert(0, "example@example.com")

password_input = Entry(width=21)
password_input.grid(column=1, row=3)

# Buttons
generate_password = Button(text="Generate Password", command=password_generator)
generate_password.grid(column=2, row=3, columnspan=2)

# Add button
button = Button(text="Add", width=36, command=save_to_file)
button.grid(column=1, row=4, columnspan=2)

# Search button
search_button = Button(text="Search",command=find_password)
search_button.grid(column=2, row=1, columnspan=2)

window.mainloop()
