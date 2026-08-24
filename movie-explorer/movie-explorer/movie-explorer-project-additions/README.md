# 🎬 Movie Explorer

A practical React project built to learn and demonstrate the core concepts used in modern React applications.

The project started as a simple movie search app and was progressively expanded to include API integration, reusable components, routing, movie details, and shared favorites state with Context API.

## 🚀 Features

- 🔎 Search movies using the OMDb API
- 🎞️ Display movie search results
- 🖼️ Show movie posters, titles, and release years
- 📄 View detailed information for a selected movie
- ❤️ Add movies to Favorites
- 🚫 Prevent duplicate favorites
- 🔗 Client-side navigation with React Router
- ⏳ Loading states
- ❌ Error and "movie not found" states
- 🎯 Dynamic movie detail routes using IMDb IDs
- 🧠 Shared favorites state using Context API

## 🛠️ Technologies Used

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- React Hooks
- OMDb API
- HTML/CSS

## 📂 Project Structure

```text
src/
├── App.jsx
├── Home.jsx
├── MovieCard.jsx
├── MovieDetail.jsx
├── Favorites.jsx
├── main.jsx
├── index.css
├── context/
│   └── FavoritesContext.jsx
└── hooks/
    └── useFetch.js
```

### Component Responsibilities

**App.jsx**
- Defines the application's routes.
- Connects URLs to pages.

**Home.jsx**
- Handles movie search.
- Stores the search text.
- Requests movie results from OMDb.
- Handles loading and error states.
- Renders the movie list.

**MovieCard.jsx**
- Displays one movie.
- Links to the movie details page.
- Allows the user to add the movie to Favorites.
- Checks whether the movie is already favorited.

**MovieDetail.jsx**
- Reads the movie IMDb ID from the URL.
- Fetches details for that specific movie.
- Displays poster, title, year, plot, and IMDb rating.

**Favorites.jsx**
- Reads the shared favorites state.
- Displays saved movies.
- Shows an empty-state message when there are no favorites.

**FavoritesContext.jsx**
- Creates the Favorites Context.
- Owns the shared favorites state.
- Exposes the state and setter to components inside the provider.

## 🔄 Application Flow

### Movie Search

```text
User types a movie name
        ↓
searchTerm state
        ↓
Search button
        ↓
OMDb API request
        ↓
JSON response
        ↓
movies state
        ↓
movies.map()
        ↓
MovieCard components
```

### Movie Details

```text
User clicks a movie
        ↓
<Link>
        ↓
/movie/<IMDb_ID>
        ↓
React Router
        ↓
MovieDetail
        ↓
useParams()
        ↓
IMDb ID
        ↓
OMDb details request
        ↓
movie state
        ↓
Movie details UI
```

### Favorites

```text
MovieCard
    ↓
useContext(FavoritesContext)
    ↓
setFavorites()
    ↓
shared favorites state
    ↓
Favorites.jsx
    ↓
useContext()
    ↓
favorites.map()
    ↓
Favorite movies displayed
```

## 🧠 React Concepts Practiced

This project was built as a hands-on learning project, so it covers practical React concepts such as:

- `useState`
- `useEffect`
- `useRef`
- Props
- Components
- Conditional rendering
- Controlled inputs
- Event handling
- `map()`
- `filter()`
- `some()`
- Spread syntax
- Immutable state updates
- React Router
- `Link`
- `useParams`
- Context API
- `useContext`
- Provider pattern
- API requests with `fetch`
- `async/await`
- Loading, error, and empty states

The project was also used as a foundation for learning additional React topics such as:

- `useReducer`
- Custom Hooks
- `useMemo`
- `useCallback`
- `React.memo`
- Advanced forms
- Redux Toolkit

## 📚 JavaScript Concepts Practiced

The project and the associated learning process also covered:

- `let`, `const`, and `var`
- Scope
- Hoisting
- `==` vs `===`
- Arrow functions
- Callbacks
- Closures
- Promises
- `async/await`
- Destructuring
- Spread/rest syntax
- `map()`
- `filter()`
- `find()`
- `some()`
- `every()`
- `reduce()`
- Optional chaining `?.`
- Nullish coalescing `??`
- Shallow vs deep copy
- Event loop
- Debouncing and throttling concepts

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd movie-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an environment file

Create a `.env` file in the project root:

```env
VITE_OMDB_API_KEY=your_omdb_api_key
```

Do not commit this file to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## 🔐 Environment Variables

The OMDb API key should be stored in an environment variable rather than hardcoded into source code.

Example:

```env
VITE_OMDB_API_KEY=your_omdb_api_key
```

In React:

```js
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
```

Then build the API URL using the variable.

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
.env.local
node_modules/
dist/
```

## ⚠️ Current Limitations

This project is primarily a practical React learning project.

- Favorites are currently stored in React Context state and will reset on a full refresh unless persistence is added.
- Styling is intentionally simple.
- Authentication is not implemented.
- Redux Toolkit was identified as a next learning step rather than fully integrated into the project.
- Advanced performance optimizations such as `useMemo`, `useCallback`, and `React.memo` were studied as next topics rather than required for the core app.

## 🎯 Learning Goal

The purpose of this project is not to create a production-ready movie platform.

The goal is to understand the practical React workflow:

```text
UI
 ↓
State
 ↓
User event
 ↓
API / routing / shared state
 ↓
State update
 ↓
Re-render
 ↓
Updated UI
```

It is designed as a reference project for understanding how individual React concepts fit together inside a real application.

## 📖 Learning Notes

A detailed companion guide covering the React and JavaScript concepts practiced in this project is available in:

**React + JavaScript Interview Notes — Movie Explorer**

Use the notes alongside this repository to revise:
- What each concept is
- Why it exists
- When to use it
- How it was applied in this project
- Common interview questions

## 📌 Future Improvements

Possible next additions:

- Debounced movie search
- Persistent Favorites with `localStorage`
- Custom `useFetch` hook
- `useReducer` for complex state
- Advanced search/filter forms
- `useMemo`, `useCallback`, and `React.memo`
- Redux Toolkit for global state
- Authentication
- Better UI and responsive styling
- Pagination
- Movie genres and sorting
- Deployment

## 👨‍💻 Project Status

**Learning project — React fundamentals and practical patterns implemented.**
