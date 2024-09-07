import requests
from twilio.rest import Client
from config import api_key,account_sid,auth_token

weather_params = {
    "lon": 35.060299,
    "lat": 37.254570,
    "appid": api_key,
    "cnt": 4,
}
response = requests.get(f"https://api.openweathermap.org/data/2.5/forecast", params=weather_params)

# In case of error pop up.
response.raise_for_status()

data = response.json()

status_code_tot = data['cod']
weather_id = data['list'][2]['weather'][0]['id']
description = data['list'][2]['weather'][0]['description']

will_rain = False
for i in data["list"]:
    condition_code = i["weather"][0]['id']
    print(condition_code)

    if int(condition_code) < 700:
        will_rain = True

if will_rain:
    client = Client(account_sid,auth_token)
    message = client.messages.create(body="Going to be a rainy day, remember to bring an umbrella.",from_="+19703720915",to="+972546187549",)
    print(message.status)