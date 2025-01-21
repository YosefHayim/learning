import json
from config_38 import api_key, app_id
import requests
from datetime import datetime

today_date = datetime.now().strftime("%x")
now_time = datetime.now().strftime("%X")

ask_user_what_exercise = input("Tell me what exercises have you been doing use the 'and' word for separating between exercises : ")

exercise_list = ask_user_what_exercise.split('and')

headers_nutritionix = {
    "x-app-id": app_id,
    "x-app-key": api_key,
    "x-remote-user-id": "0",
}


end_point_calories = 'https://trackapi.nutritionix.com/v2/natural/exercise'

activity_list = []

for exercise in exercise_list:
    headers_sheet = {
        "Content-Type": "application/json"
    }

    body_data = {
        "query": exercise.strip()
    }

    post_response_nutrition = requests.post(url=end_point_calories, headers=headers_nutritionix, json=body_data)
    post_response_nutrition.raise_for_status()
    data = post_response_nutrition.json()

    for exercise_data in data['exercises']:
        exercise_type = exercise_data['user_input']
        nf_calories = exercise_data['nf_calories']
        duration_exercise = exercise_data['duration_min']

        print(f"Exercise: {exercise_type}, Duration: {duration_exercise} minutes, Calories: {nf_calories}")

        body_sheets = {
            "workout": {
                "date": today_date,
                "time": now_time,
                "exercise": exercise_type,
                "duration": duration_exercise,
                "calories": nf_calories
            }
        }

        activity_list.append(body_sheets)

        end_point_sheets = f'https://api.sheety.co/deff03328f041c0def174f4c4c455222/day38ProjectPythonMyWorkouts/workouts'
        post_response_sheets = requests.post(url=end_point_sheets, json=body_sheets, headers=headers_sheet)
        post_response_sheets.raise_for_status()

        data_sheets = post_response_sheets.json()