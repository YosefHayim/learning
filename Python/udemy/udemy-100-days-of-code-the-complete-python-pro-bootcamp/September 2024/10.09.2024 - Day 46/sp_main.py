from dotenv import load_dotenv
import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth


class SpotifyClient:
    def __init__(self):
        load_dotenv()
        client_id = os.getenv('clientID')
        client_secret = os.getenv('clientSECRET')
        redirect_uri = os.getenv('REDIRECT_URI')
        scope = "playlist-modify-public"  # Permission to create a playlist and add songs

        # Use cache_path to store token
        self.sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,
                                                            client_secret=client_secret,
                                                            redirect_uri=redirect_uri,
                                                            scope=scope,
                                                            cache_path=".spotify_cache"))  # Token cache

    def get_user_id(self):
        # Fetch the current user's Spotify ID
        return self.sp.current_user()['id']

    def search_track(self, track_name):
        # Search for a track by name
        result = self.sp.search(q=track_name, type='track', limit=1)
        if result['tracks']['items']:
            track_id = result['tracks']['items'][0]['id']
            print(f"Found track: {track_name} - {track_id}")  # Debugging print
            return track_id
        else:
            print(f"Track {track_name} not found.")
            return None

    def create_playlist(self, playlist_name):
        # Create a new playlist for the current user
        user_id = self.get_user_id()
        playlist = self.sp.user_playlist_create(user=user_id, name=playlist_name, public=True)
        print(f"Playlist created: {playlist_name}")  # Debugging print
        return playlist['id']

    def add_tracks_to_playlist(self, playlist_id, track_ids):
        # Add tracks to the created playlist
        self.sp.playlist_add_items(playlist_id=playlist_id, items=track_ids)
        print(f"Added {len(track_ids)} tracks to playlist.")  # Debugging print
