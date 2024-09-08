#This file will need to use the DataManager,FlightSearch, FlightData, NotificationManager classes to achieve the program requirements.
from data_manager import sheet_data

for i in sheet_data:
    city = i['city']
    print(city)