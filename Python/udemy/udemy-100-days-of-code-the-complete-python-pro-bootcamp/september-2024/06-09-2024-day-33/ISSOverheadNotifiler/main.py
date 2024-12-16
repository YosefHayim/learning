import requests
from datetime import datetime
import smtplib
import time

# Define your latitude and longitude
MY_LAT = 51.507351
MY_LONG = -8.127758


# Function to check if the ISS is close to your location
def is_iss_overhead():
    # Get the ISS position
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    response.raise_for_status()
    data = response.json()

    # Get ISS latitude and longitude
    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    # Check if ISS is within +/- 5 degrees of your position
    if MY_LAT - 5 <= iss_latitude <= MY_LAT + 5 and MY_LONG - 5 <= iss_longitude <= MY_LONG + 5:
        return True
    return False


# Function to check if it's currently dark
def is_night_time():
    # Get the sunrise and sunset times
    parameters = {
        "lat": MY_LAT,
        "lng": MY_LONG,
        "formatted": 0
    }
    response = requests.get(f"https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()

    # Extract sunrise and sunset times and convert them to hour and minute
    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])

    # Get the current hour in UTC
    time_now = datetime.utcnow().hour

    # Check if it's currently before sunrise or after sunset
    if time_now >= sunset or time_now <= sunrise:
        return True
    return False


# Function to send an email
def send_email():
    my_email = "your_email@gmail.com"
    password = "your_password"

    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(
            from_addr=my_email,
            to_addrs="recipient_email@gmail.com",
            msg="Subject:Look Up\n\nThe ISS is above you in the sky!"
        )


# Main logic to check every 60 seconds
while True:
    if is_iss_overhead() and is_night_time():
        send_email()
    time.sleep(60)