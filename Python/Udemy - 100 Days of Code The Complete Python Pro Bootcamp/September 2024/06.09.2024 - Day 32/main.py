import smtplib
import datetime as dt
import random
from encrpyted import my_email,password,friend_email

# Challenge 1: send to myself email with random quote from the quotes.txt file.
def send_motivational_email():
    with open("quotes.txt",mode="r") as file:
        data = [i.strip() for i in file]
        random_quote = data[random.randint(0,len(data)- 1)]

    with smtplib.SMTP(f"smtp.gmail.com") as connection:
        # TLS stands for Transport Layer Security, making the message encrypted.
        connection.starttls()
        connection.login(user=my_email,password=password)
        connection.sendmail(from_addr=my_email,to_addrs=friend_email,
                            msg=f"Subject:Quote of today!\n\n{random_quote}")
        connection.close()

send_motivational_email()
# using the module datetime as a dt shortcut like we do in server SQL
# now = dt.datetime.now()
#
# # methods of the now class.
# year = now.year
# month = now.month
# day = now.day
# day_of_week = now.weekday()
#
# # getting a specific datetime set.
# date_of_birth = dt.datetime(year=2000,month=7,day=17)
