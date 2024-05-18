from flask import Flask, request, jsonify
from flask_cors import CORS
from knn import recommend_phones
import csv
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    messages = view_all_models()
    return jsonify(messages)

def view_all_models():
    filename = 'mobile.csv'
    results = []
    with open(filename, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            results.append({'Brand': row['Brand'], 'Model': row['Model'], 'Price_PHP': row['Price_PHP']})
    return results


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
    