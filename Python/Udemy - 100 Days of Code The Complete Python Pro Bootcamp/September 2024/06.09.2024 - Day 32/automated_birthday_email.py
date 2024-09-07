import random
import smtplib
from encrpyted import my_email,password,friend_email
import pandas as pandas
import datetime as dt
import os
##################### Extra Hard Starting Project ######################

# 1. Update the birthdays.csv
df = pandas.read_csv('birthdays.csv')

# name = input("Enter name: ")
# email = input("Enter email: ")
# day = int(input("Enter day: "))
# month = int(input("Enter month: "))
# year = int(input("Enter year: "))

# new_row = {'name': name, 'email': email, 'year': year, 'month': month, "day": day}
# df = df._append(new_row, ignore_index=True)
# df.to_csv('birthdays.csv', index=False)
# print("New row added to the CSV file.")

# 2. Check if today matches a birthday in the birthdays.csv
now = dt.datetime.now()
year = now.year
month = now.month
day = now.day
day_of_week = now.weekday()

with open("birthdays.csv", mode="r") as file:
    data = [i.strip().split(",") for i in file]

for i in data[1:]:
    if int(i[3]) == month and int(i[4]) == day:
        print(f'{i[0]} has a birthday today!')
    name = i[0]
    email = i[1]


# 3. If step 2 is true, pick a random letter from letter templates and replace the [NAME] with the person's actual name from birthdays.csv
directory_path = "C:/Users/User/PycharmProjects/pythonProject1/Udemy - 100 Days of Code The Complete Python Pro Bootcamp/September 2024/06.09.2024 - Day 32/letter_templates"
files = os.listdir(directory_path)

random_file_letter_choice = random.randint(0,len(files) - 1)

file_path = os.path.join(directory_path, files[random_file_letter_choice])

with open(file_path) as file:
    template_letter_data = file.read()

personalized_letter = template_letter_data.replace("[NAME]", name)
# 4. Send the letter generated in step 3 to that person's email address.

def send_motivational_email():
    with smtplib.SMTP(f"smtp.gmail.com") as connection:
        # TLS stands for Transport Layer Security, making the message encrypted.
        connection.starttls()
        connection.login(user=my_email,password=password)
        connection.sendmail(from_addr=my_email,to_addrs=friend_email,msg=f"Subject:Happy Birthday!\n\n{personalized_letter}")
        connection.close()

send_motivational_email()


