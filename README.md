# KNN-Mobile-Recommendation

A mobile recommendation application built with React and TypeScript, using a K-Nearest Neighbors (KNN) algorithm for recommendations. The app is styled with Tailwind CSS and the DaisyUI component library.

## Tech Stack

- **Frontend:** Vite, React, TypeScript, Tailwind CSS, DaisyUI
- **Backend:** Python 3.12.3, Flask
- **Dependencies:** Axios, react-router-dom, react-icons, Flask-CORS, Scikit-Learn, Pandas

## Requirements

### Python Packages

Ensure you have Python 3.12.3 installed. Install the required Python packages using the `requirements.txt` file:
flask
flask-cors
scikit-learn
pandas

### NPM Packages

Ensure you have Node.js 10.5.2 installed. Install the required NPM packages using `package.json`.

## Getting Started

To run the application locally, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/furaquejohn11/KNN-Mobile-Recommendation.git
cd KNN-Mobile-Recommendation
```

### 2. Setup Backend
Open the repository in Visual Studio Code. In the terminal, navigate to the backend directory:
```sh
cd backend
```

If this is your first time setting up the app, install the required Python packages:
```sh
pip install -r requirements.txt
```

Start the Flask backend server:
```sh
python app.py
```

### 3. Setup Frontend
Open a new terminal in Visual Studio Code and navigate to the frontend directory:
```sh
cd frontend
```

If this is your first time setting up the app, install the required NPM packages:
```sh
npm install
```

Start the React development server:
```sh
npm run dev
```

### 4. Open the App
Ensure you are connected to the internet, as the application embeds images online. 
Open your browser and navigate to the local development server URL provided by Vite 
(usually `http://localhost:5173/`).

## Features

- **K-Nearest Neighbors Algorithm** for mobile recommendations
- **Responsive Design** using Tailwind CSS and DaisyUI
- **Interactive UI** built with React and TypeScript

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

