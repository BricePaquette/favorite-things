from dotenv import dotenv_values
import requests
config = dotenv_values('.env')

print(config)
api_call = f'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key={config["STEAM_API"]}&steamid={config["STEAM_ID"]}'

try:
    response = requests.get(api_call)

    if response.status_code == 200:
            # Parse the JSON response
            data = response.json()

            # Extract and print the list of recently played games
            if 'response' in data and 'games' in data['response']:
                recently_played_games = data['response']['games']
                for game in recently_played_games:
                    print(f"Game ID: {game['appid']}, Name: {game['name']}, Playtime (in minutes): {game['playtime_2weeks']}")

    else:
        print(f"Error: Unable to fetch data. Status code: {response.status_code}")

except Exception as e:
    print(f"An error occurred: {str(e)}")