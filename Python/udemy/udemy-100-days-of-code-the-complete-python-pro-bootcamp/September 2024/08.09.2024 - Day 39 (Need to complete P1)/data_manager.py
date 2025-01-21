from pprint import pprint
import requests

class DataManager:

    def __init__(self):
        self.placeholder = None

    def get_sheets_data(self):
        response = requests.get('https://api.sheety.co/deff03328f041c0def174f4c4c455222/flightDeals/prices')
        response.raise_for_status()
        data = response.json()
        return data['prices']

    def edit_sheets_data(self):
        for i in range(2, 11):
            body = {
                "price": {
                    "code": "TESTING",
                }
            }
            url = f'https://api.sheety.co/deff03328f041c0def174f4c4c455222/flightDeals/prices/{i}'
            response = requests.put(url=url, json=body)
            response.raise_for_status()
            data = response.json()
            print(data)

    def delete_code_cities(self):
        for i in range(2, 11):
            body = {
                "price": {
                    "code": "",
                }
            }
            url = f'https://api.sheety.co/deff03328f041c0def174f4c4c455222/flightDeals/prices/{i}'
            response = requests.put(url=url, json=body)
            response.raise_for_status()
            data = response.json()
            print(data)



dm = DataManager()
# sheet_data = dm.get_sheets_data()
# dm.edit_sheets_data()
dm.delete_code_cities()