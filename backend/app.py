from flask import Flask, jsonify
from flask_cors import CORS
import csv

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
                results.append({'brand': row['Brand'], 'model': row['Model']})
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

if __name__ == '__main__':
    app.run(debug=True)