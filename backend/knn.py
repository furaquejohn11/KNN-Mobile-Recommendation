import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import NearestNeighbors

# Load the dataset
dataset = pd.read_csv('mobile.csv')
print(len(dataset))

# Preprocess the data
X = dataset[['Display_Size_inch', 'RAM_GB', 'Storage_GB', 'Battery_mAh', 'Price_PHP']]
y = dataset[['Brand', 'Model', 'Price_PHP', 'Img_Link', 'Display_Spec', 'RAM_GB', 'Storage_GB', 'Battery_mAh', 'Shop_Link']]

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalize the data
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Initialize the NearestNeighbors model
neigh = NearestNeighbors(n_neighbors=5)
neigh.fit(X_train)

# Function to recommend phones based on user input
def recommend_phones(user_api_input):
    display_size, ram, storage, battery, budget = user_api_input

    if not (0.5 <= display_size <= 10 and 1 <= ram <= 16 and 8 <= storage <= 512 and 1000 <= battery <= 10000 and 1000 <= budget <= 100000):
        print("Invalid input specifications. Please enter reasonable values.")
        return pd.DataFrame()

    user_input = pd.DataFrame({'Display_Size_inch': [display_size],
                                'RAM_GB': [ram],
                                'Storage_GB': [storage],
                                'Battery_mAh': [battery],
                                'Price_PHP': [budget]})

    # Normalize the user's input
    user_input_scaled = scaler.transform(user_input)

    # Find the nearest neighbors to the user's input
    distances, indices = neigh.kneighbors(user_input_scaled)

    # Get the recommended phones
    recommended_phones = y_train.iloc[indices[0]]

    # Filter out phones exceeding the budget
    recommended_phones = recommended_phones[recommended_phones['Price_PHP'] <= budget]

    # Return the desired columns
    return recommended_phones[['Brand', 'Model', 'Price_PHP', 'Img_Link', 'Display_Spec', 'RAM_GB', 'Storage_GB', 'Battery_mAh', 'Shop_Link']]

# Example usage
# user_input = get_user_input()
# recommended_phones = recommend_phones(user_input)
# print(recommended_phones)
