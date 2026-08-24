import { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  async function searchMovies() {
    setLoading(true);
    setError("");

    try {
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=f19f15fe&s=${searchTerm}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("Movie not found.");
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Movie Explorer</h1>

      <input
        ref={searchInput}
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search Movie"
      />

      <button onClick={searchMovies}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
