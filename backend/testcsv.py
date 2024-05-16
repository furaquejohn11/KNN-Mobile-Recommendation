import csv

def search_models(filename, max_price):
    results = []
    with open(filename, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if int(row['Price_PHP']) < max_price:
                results.append(row)
    return results

def main():
    filename = 'mobile.csv'
    max_price = 10000
    results = search_models(filename, max_price)
    
    if results:
        print("Models with price lower than 10k PHP:")
        for result in results:
            print(f"{result['Brand']} {result['Model']}")
    else:
        print("No models found with price lower than 10k PHP.")

if __name__ == "__main__":
    main()