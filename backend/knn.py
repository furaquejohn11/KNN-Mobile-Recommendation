import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler

# Load the CSV data into a pandas DataFrame
data = pd.read_csv('mobile.csv')

# Define the features and target variable
features = ['Display_Size_inch', 'RAM_GB', 'Storage_GB', 'Battery_mAh']
target = ['Brand', 'Model']

# Preprocess the data
X = data[features].values
y = data[target]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Create a KNN model
knn = NearestNeighbors(n_neighbors=5, metric='euclidean')
knn.fit(X_scaled)

def get_user_input():
    display_size = float(input("Enter desired display size (in inches): "))
    ram = int(input("Enter desired RAM (in GB): "))
    storage = int(input("Enter desired storage (in GB): "))
    battery = int(input("Enter desired battery capacity (in mAh): "))
    budget = int(input("Enter your budget (in PHP): "))
    return [display_size, ram, storage, battery, budget]

# Function to recommend phones based on user input
def recommend_phones(user_input, k=5):
    user_input_scaled = scaler.transform([user_input[:4]])
    distances, indices = knn.kneighbors(user_input_scaled)
    budget = user_input[4]
    recommended_phones = data.iloc[indices[0][:k]].reset_index(drop=True)
    recommended_phones = recommended_phones[recommended_phones['Price_PHP'] <= budget][['Brand', 'Model', 'Price_PHP', 
                                                                                        'Img_Link', 'Display_Spec', 'RAM_GB',
                                                                                        'Storage_GB','Battery_mAh']]
    return recommended_phones
