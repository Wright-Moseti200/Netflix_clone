# 🎬 Netflix Clone

<div align="center">

**A fully responsive frontend clone of the Netflix web application with real-time movie data**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TMDB API](https://img.shields.io/badge/TMDB-API-01d277.svg)](https://www.themoviedb.org/)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://your-demo-link.com)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment) • [Contributing](#-contributing)

</div>

---

## 🌟 About

Netflix Clone is a pixel-perfect recreation of the Netflix browsing experience, built with modern web technologies. This project demonstrates advanced React concepts, API integration, and responsive design principles by fetching real-time movie and TV show data from The Movie Database (TMDB).

## ✨ Features

<table>
<tr>
<td>

### 🎨 Authentic UI
- Pixel-perfect Netflix interface
- Smooth animations and transitions
- Professional color scheme
- Hover effects on movie posters

</td>
<td>

### 🎥 Dynamic Content
- Real-time data from TMDB API
- Trending movies and TV shows
- Top-rated content
- Genre-specific collections

</td>
</tr>
<tr>
<td>

### 🖼️ Hero Banner
- Featured movie showcase
- Dynamic backdrop images
- Movie descriptions and details
- Call-to-action buttons

</td>
<td>

### 📜 Row Sliders
- Horizontal scrolling categories
- Netflix Originals section
- Trending Now carousel
- Multiple genre rows

</td>
</tr>
<tr>
<td>

### ▶️ Trailer Playback
- Click-to-play trailers
- YouTube integration
- Modal video player
- Smooth video transitions

</td>
<td>

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop compatibility
- Cross-browser support

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **CSS3** | Styling and animations |
| **BEM Convention** | CSS naming methodology |
| **Tailwind CSS** | Utility-first styling (optional) |
| **TMDB API** | Movie and TV show data |
| **Axios** | HTTP client for API requests |
| **React YouTube** | YouTube video integration |
| **Firebase Hosting** | Deployment platform |
| **Vercel/Netlify** | Alternative hosting options |

</div>

## 📂 Project Structure

```
Netflix_clone/
│
├── public/                 # Static files
│   ├── index.html         # HTML template
│   └── favicon.ico        # App icon
│
├── src/
│   ├── components/        # React components
│   │   ├── Banner/        # Hero section component
│   │   │   ├── Banner.js
│   │   │   └── Banner.css
│   │   ├── Nav/           # Navigation bar
│   │   │   ├── Nav.js
│   │   │   └── Nav.css
│   │   └── Row/           # Movie row component
│   │       ├── Row.js
│   │       └── Row.css
│   │
│   ├── requests.js        # API endpoint configuration
│   ├── axios.js           # Axios instance setup
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
│
├── .env                   # Environment variables (not committed)
├── .gitignore            # Git ignore file
├── package.json          # Dependencies and scripts
└── README.md             # Documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher) installed
- A valid API Key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
- [Git](https://git-scm.com/) installed

### Getting Your TMDB API Key

1. Create a free account at [TMDB](https://www.themoviedb.org/signup)
2. Navigate to **Settings** → **API**
3. Request an API key (choose "Developer" option)
4. Copy your API Key (v3 auth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Wright-Moseti200/Netflix_clone.git
   cd Netflix_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```
   
   **Important:** Never commit your `.env` file to version control!

4. **Run the application**
   ```bash
   npm start
   ```
   
   The app will open automatically at `http://localhost:3000`

### Build for Production

To create an optimized production build:
```bash
npm run build
```

## 📡 API Integration

This project uses the TMDB API to fetch movie and TV show data. Key endpoints include:

| Endpoint | Description |
|----------|-------------|
| `/trending/all/week` | Trending content this week |
| `/movie/top_rated` | Top-rated movies |
| `/tv/top_rated` | Top-rated TV shows |
| `/discover/tv` | Netflix Originals |
| `/movie/{movie_id}/videos` | Movie trailers |

### API Configuration

The `requests.js` file contains all API endpoint configurations:
```javascript
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // ... more endpoints
};
```

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

## 🎨 Customization

### Adding New Movie Categories

1. Add a new request in `requests.js`:
   ```javascript
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`
   ```

2. Import and use in `App.js`:
   ```javascript
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   ```

### Styling

- Global styles: Edit `src/App.css`
- Component styles: Edit individual CSS files in component folders
- BEM naming convention is used throughout the project

## 🗺️ Roadmap

- [ ] User authentication system
- [ ] Watchlist functionality
- [ ] Search feature
- [ ] Multiple language support
- [ ] My List feature
- [ ] Movie/Show detail pages
- [ ] Continue watching section
- [ ] User profiles

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and BEM naming convention
- Test your changes thoroughly
- Update documentation as needed
- Write clear commit messages
- Add comments for complex logic

## 🐛 Known Issues

- Trailer playback may not work for all movies (depends on TMDB data availability)
- Some movies may not have high-quality backdrop images
- API rate limits apply (TMDB free tier)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Disclaimer:** This project is for educational purposes only. All movie data and images are provided by TMDB. Netflix and the Netflix logo are trademarks of Netflix, Inc.

## 👨‍💻 Author

**Wright Moseti**

- GitHub: [@Wright-Moseti200](https://github.com/Wright-Moseti200)
- Project Link: [Netflix Clone](https://github.com/Wright-Moseti200/Netflix_clone)

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [Netflix](https://www.netflix.com/) for design inspiration
- [React Documentation](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React YouTube](https://www.npmjs.com/package/react-youtube)

## 💡 Learning Resources

If you're new to React or want to learn more:
- [React Official Tutorial](https://react.dev/learn)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [CSS BEM Methodology](http://getbem.com/)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Wright Moseti

</div>
