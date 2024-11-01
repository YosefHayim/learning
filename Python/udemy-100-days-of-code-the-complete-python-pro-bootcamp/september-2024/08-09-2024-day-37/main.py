import requests
import json
from config_37 import token, username
from datetime import datetime

pixela_endpoint = "https://pixe.la/v1/users"

# You can uncomment this to create a user, if needed
# response_create_user = requests.post(url=pixela_endpoint, json=user_params)
# response_create_user.raise_for_status()
# print(response_create_user.text)

# Creating a graph config
graph_config = {
    "id": "graph1",
    "name": "Learning Graph",
    "unit": "hours",
    "type": "float",
    "color": "sora",
}

# Authentication header using token
headers = {
    "X-USER-TOKEN": token
}

today = datetime.now()

post_data_config = {
    "date": today.strftime("%Y%m%d"),
    "quantity": "9",
    "optionalData": json.dumps({
        "Day": "Saturday",
        "Location": "Learning from home"
    })
}

graph_data_post = f"{pixela_endpoint}/{username}/graphs/graph1"

response_data_post = requests.post(url=graph_data_post, json=post_data_config, headers=headers)

try:
    response_data_post.raise_for_status()
    print(response_data_post.text)
except requests.exceptions.HTTPError as err:
    print(f"HTTP Error: {err}")
    print(f"Response Content: {response_data_post.text}")
