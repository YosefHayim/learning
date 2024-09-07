# This package is for making requests via API.
import requests
from datetime import datetime

# response = requests.get(url="http://api.open-notify.org/iss-now.json")
# response.raise_for_status()
# # print(response) #Output Response 200 means it is successful.
# data = response.json()
# print(data)
#
# # Assign to the variable data the response in a json format.
# data = response.json()
#
# # Locate from that dictionary the specific iss location by the longitude and latitude.
# longitude = data["iss_position"]["longitude"]
# latitude = data["iss_position"]["latitude"]
#
# iss_position = (longitude, latitude)
#
# print(iss_position)

# Understand API Parameters
MY_LAT = 51.507351
MY_LONG = -8.127758

parameters = {
    "lat": MY_LAT,
    "lng": MY_LONG,
    "formatted": 0
}
# The url itself is what being called Endpoint.
response = requests.get(f"https://api.sunrise-sunset.org/json", params=parameters)
response.raise_for_status()
data = response.json()
# Separating the data by the T letter because it made the response together. Then split again by the second list index which is 1 than split that 1 index again by the comma to get the hour split.
sunrise = data["results"]["sunrise"].split("T")[1].split(":")
print(sunrise)
sunset = data["results"]["sunset"]
time_now = datetime.now()
print(time_now)