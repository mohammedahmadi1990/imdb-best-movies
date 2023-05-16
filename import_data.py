# !pip install pandas pymongo dnspython python-dotenv

# libraries
import pandas as pd
import os
from dotenv import load_dotenv
from pymongo import MongoClient

# import dataset
data = pd.read_csv("imdb_top_1000.csv")

# username & password from env file
load_dotenv()
username = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")

# connect MongoDB
client = MongoClient(
    f"mongodb+srv://{username}:{password}@cluster0.hdqhgh5.mongodb.net/"
)
db = client.get_database("imdb")

# convert dataframe to list of dicts
records = data.to_dict("records")

# use or create a collection named 'movies'
movies = db.movies

# insert the records into the collection
movies.insert_many(records)
