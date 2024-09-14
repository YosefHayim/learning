from bs4 import BeautifulSoup
import requests
import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

URL = "https://appbrewery.github.io/instant_pot/"

response = requests.get(url=URL)
response.raise_for_status()
data = response.text

soup = BeautifulSoup(data,'html.parser')
find_price = soup.find('span',class_='a-price aok-align-center reinventPricePriceToPayMargin priceToPay')
w_text = soup.get_text()
find_price_text = find_price.get_text()
price_value = find_price_text.split('$')
int_price_value = float(price_value[1])

if int_price_value > 100:
    sender_email = os.getenv('sender_email')
    receiver_email = os.getenv('receiver_email')
    password = os.getenv('password')

    # Define the subject and body of the email
    subject = "Product Alert! Your product price is below $100!"
    body = "Day 47 Udemy Python code."

    # Create the full email message
    email_message = f"Subject: {subject}\n\n{body}"

    # Set up the Gmail SMTP server
    smtp_server = "smtp.gmail.com"
    port = 587  # For TLS

    server = smtplib.SMTP(smtp_server, port)
    server.starttls()  # Secure the connection
    server.login(sender_email, password)  # Log in to your Gmail account
    server.sendmail(sender_email, receiver_email, email_message)  # Send the email

    server.quit()  # Close the connection
    print('Email has been sent.')