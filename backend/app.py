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
            results.append({'Brand': row['Brand'], 
                            'Model': row['Model'], 
                            'Price_PHP': row['Price_PHP'], 
                            'Img_Link' : row['Img_Link'],
                            'Display_Spec' : row['Display_Spec'],
                            'RAM_GB' : row['RAM_GB'],
                            'Storage_GB' : row['Storage_GB'],
                            'Battery_mAh': row['Battery_mAh'],
                            'Shop_Link' : row['Shop_Link'],
                            'Processor' : row['Processor']})
    return results


@app.route('/api/find-phone', methods=['POST', 'GET'])
def find_phone():
    data = request.get_json()
    display = float(data.get('display'))
    ram = float(data.get('ram'))
    storage = float(data.get('storage'))
    battery = float(data.get('battery'))
    budget = float(data.get('budget'))
 
    specs = [display, ram, storage, battery, budget]
    recommended_phones = recommend_phones(specs)
    # print(recommended_phones.to_dict(orient='records'))
    return jsonify(recommended_phones.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
    