from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler
from knn import recommend_phones
import csv
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    messages = get_csv()
    return jsonify(messages)

def search_models(filename, max_price):
    results = []
    with open(filename, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if int(row['Price_PHP']) < max_price:
                results.append({'brand': row['Brand'], 'model': row['Model'], 'price': row['Price_PHP']})
    return results

def get_csv():
    filename = 'mobile.csv'
    max_price = 10000
    results = search_models(filename, max_price)
    mobile = []
    if results:
        print("Models with price lower than 10k PHP:")
        for result in results:
            mobile.append(result)
            print(f"{result['brand']} {result['model']}")
    else:
        print("No models found with price lower than 10k PHP.")
    return mobile

@app.route('/api/find-phone', methods=['POST', 'GET'])
def find_phone():
    data = request.get_json()
    display = float(data.get('display'))
    ram = int(data.get('ram'))
    storage = int(data.get('storage'))
    battery = int(data.get('battery'))
    budget = int(data.get('budget'))
 
    specs = [display, ram, storage, battery, budget]
    recommended_phones = recommend_phones(specs)
    print(recommended_phones.to_dict(orient='records'))
    return jsonify(recommended_phones.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
    