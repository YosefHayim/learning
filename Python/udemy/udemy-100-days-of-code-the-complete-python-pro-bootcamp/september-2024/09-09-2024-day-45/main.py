import re
import requests
from bs4 import BeautifulSoup

URL = "https://web.archive.org/web/20200518073855/https://www.empireonline.com/movies/features/best-movies-2/"

response = requests.get(URL)
response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")
w_titles = soup.find_all('h3', class_="title")

movies_list = []

for i in w_titles:
    clean_titles = re.sub(r'^\d+\)', '', i.get_text()).strip()
    movies_list.append(clean_titles)

asc_order_movies_list = movies_list[::-1]

with open("movies_list.txt", mode="w", encoding="utf-8") as file:
    for index, movie in enumerate(asc_order_movies_list, start=1):
        file.write(f'{index}. {movie}\n')
    print('Finished project.')
