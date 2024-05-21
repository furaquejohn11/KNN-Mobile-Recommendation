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

# def get_user_input():
#     display_size = float(input("Enter desired display size (in inches): "))
#     ram = int(input("Enter desired RAM (in GB): "))
#     storage = int(input("Enter desired storage (in GB): "))
#     battery = int(input("Enter desired battery capacity (in mAh): "))
#     budget = int(input("Enter your budget (in PHP): "))
#     return [display_size, ram, storage, battery, budget]

# Function to recommend phones based on user input
def recommend_phones(user_input, k=5):
    # Define reasonable ranges for specifications
    display_range = (5.0, 7.0)  # Assuming display size between 5 and 7 inches
    ram_range = (2, 16)  # Assuming RAM between 2 and 16 GB
    storage_range = (32, 512)  # Assuming storage between 32 and 512 GB
    battery_range = (3000, 6000)  # Assuming battery capacity between 3000 and 6000 mAh
    budget_range = (10000, 100000)  # Assuming budget between 10,000 and 100,000 PHP

    display_size, ram, storage, battery, budget = user_input

    # Check if user input is within reasonable ranges
    if not (display_range[0] <= display_size <= display_range[1] and
            ram_range[0] <= ram <= ram_range[1] and
            storage_range[0] <= storage <= storage_range[1] and
            battery_range[0] <= battery <= battery_range[1] and
            budget_range[0] <= budget <= budget_range[1]):
        return pd.DataFrame(columns=['Brand', 'Model', 'Price_PHP', 'Img_Link', 'Display_Spec', 'RAM_GB', 'Storage_GB', 'Battery_mAh'])

    user_input_scaled = scaler.transform([user_input[:4]])
    distances, indices = knn.kneighbors(user_input_scaled)
    recommended_phones = data.iloc[indices[0][:k]].reset_index(drop=True)
    recommended_phones = recommended_phones[recommended_phones['Price_PHP'] <= budget][['Brand', 'Model', 'Price_PHP', 'Img_Link', 'Display_Spec', 'RAM_GB', 'Storage_GB', 'Battery_mAh']]
    return recommended_phones
