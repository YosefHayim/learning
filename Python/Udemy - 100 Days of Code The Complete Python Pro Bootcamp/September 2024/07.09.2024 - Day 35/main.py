import requests
from config import api_key

# The URL in the Chrome browser I tried to get the local temperature at holon,il
# https://api.openweathermap.org/data/2.5/weather?q=holon,il&appid=faf110a59fa592f3bb08d8544ea30081

weather_params = {
    "lon": 19.458599,
    "lat": 51.759048,
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
    print('Bring an umbrella.')