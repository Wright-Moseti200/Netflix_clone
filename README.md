🎬 Netflix Clone

A fully responsive frontend clone of the Netflix web application. This project simulates the core user interface and functionality of Netflix, fetching real-time movie and TV show data using the TMDB API.

✨ Features

Authentic UI: Closely mimics the Netflix "browse" experience.

Dynamic Content: Fetches trending, top-rated, and genre-specific movies/shows via TMDB API.

Hero Banner: Displays a featured movie with a backdrop and description.

Row Sliders: Horizontal scrolling for different categories (e.g., Netflix Originals, Trending Now).

Trailer Playback: Click on a movie to play its trailer (via YouTube integration).

Responsive Design: Optimized for mobile, tablet, and desktop viewing.

🛠️ Tech Stack

Frontend: React.js

Styling: CSS3 / BEM Naming Convention / Tailwind CSS

Data Source: The Movie Database (TMDB) API

HTTP Client: Axios

Hosting: Firebase Hosting / Vercel / Netlify

📂 Project Structure

Netflix_clone/
├── public/
├── src/
│   ├── components/      # UI Components
│   │   ├── Banner/      # Hero section
│   │   ├── Nav/         # Top navigation bar
│   │   └── Row/         # Movie rows
│   ├── requests.js      # API endpoint configuration
│   ├── axios.js         # Axios instance setup
│   ├── App.js           # Main component
│   └── App.css          # Global styles
├── package.json
└── README.md


🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

Node.js installed.

A valid API Key from TMDB.

Installation

Clone the repository:

git clone [https://github.com/Wright-Moseti200/Netflix_clone.git](https://github.com/Wright-Moseti200/Netflix_clone.git)
cd Netflix_clone


Install dependencies:

npm install


Configure API Key:

Create a file named .env in the root directory.

Add your TMDB API key:

REACT_APP_TMDB_API_KEY=your_api_key_here


Run the application:

npm start


The app should open at http://localhost:3000.

📸 Screenshots

(Add screenshots of your application here)

Hero Banner

Movie Rows





🤝 Contributing

Contributions are welcome!

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewFeature).

Commit your Changes (git commit -m 'Add some NewFeature').

Push to the Branch (git push origin feature/NewFeature).

Open a Pull Request.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Developed by Wright-Moseti200
