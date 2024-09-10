import re
import requests
from bs4 import BeautifulSoup
from sp_main import SpotifyClient  # Import the SpotifyClient class

# Scrape the Billboard Hot 100
ask_user = '2000-07-17'
URL = f'https://www.billboard.com/charts/hot-100/{ask_user}/'
response = requests.get(url=URL)
response.raise_for_status()

soup = BeautifulSoup(response.text, 'html.parser')
h3_titles = soup.find_all('h3', class_=re.compile(r'\bc-title\b.*\ba-no-trucate\b.*\ba-font\b'))

# Extract song names
songs_list = []
for title in h3_titles:
    songs_list.append(title.get_text(strip=True))

print("Song List:", songs_list)

# Initialize the Spotify client
spotify_client = SpotifyClient()

# Create a playlist
playlist_name = f"Billboard Hot 100 on {ask_user}"
playlist_id = spotify_client.create_playlist(playlist_name)

# Search for tracks and collect their IDs
track_ids = []
for song in songs_list:
    track_id = spotify_client.search_track(song)
    if track_id:
        track_ids.append(track_id)

# Add tracks to the created playlist
if track_ids:
    spotify_client.add_tracks_to_playlist(playlist_id, track_ids)
    print(f"Tracks added to playlist: {playlist_name}")
else:
    print("No tracks were found to add to the playlist.")
