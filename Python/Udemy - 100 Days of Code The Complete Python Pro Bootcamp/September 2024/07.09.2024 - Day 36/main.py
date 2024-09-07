import requests
from config import api_key_news,auth_token,account_sid
from datetime import datetime,timedelta
from twilio.rest import Client


STOCK = "IBM"
COMPANY_NAME = "IBM is International Business Machines Corporation"

before_yesterday = datetime.now().date() - timedelta(days=2)
double_yesterday = datetime.now().date() - timedelta(days=3)

url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
response = requests.get(url)
data = response.json()

before_yesterday_stock_price_data = float(data['Time Series (Daily)'][f'{before_yesterday}']['4. close'])
double_yesterday_price_data = float(data['Time Series (Daily)'][f'{double_yesterday}']['4. close'])
print(f'Date: {before_yesterday}\nPrice: {before_yesterday_stock_price_data}\nDate: {double_yesterday}\nPrice: {double_yesterday_price_data}')

price_difference = before_yesterday_stock_price_data - double_yesterday_price_data
percentage_change = (price_difference / double_yesterday_price_data) * 100
print(f'Percent changes: {percentage_change}\n')

url_news = f'https://newsapi.org/v2/everything?q={COMPANY_NAME}&apiKey={api_key_news}'
response_news = requests.get(url_news)
data_news = response_news.json()

def get_news_data():
    count = 0
    news_data = []
    for i in data_news['articles']:
        news_data.append(f"Date Published:{i['publishedAt'].split('T')}\nTitle is: {i['title']}\nDescription: {i['description']}\nLink to article: {i['url']}\n")
        count += 1
        if count == 3:
            return news_data

news_articles = get_news_data()

if percentage_change >= 0 or percentage_change <= 0:
    client = Client(account_sid, auth_token)
    message = client.messages.create(body=f"{STOCK}:Percent Change: {percentage_change} {news_articles}",from_="+19703720915", to="+972546187549", )
    print(message.status)
else:
    print("No significant change.")

