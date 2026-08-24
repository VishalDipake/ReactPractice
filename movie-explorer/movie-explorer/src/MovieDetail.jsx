import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const url = `https://www.omdbapi.com/?apikey=f19f15fe&i=${id}`;

        console.log("Movie ID:", id);
        console.log("Details URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("Movie Detail:", data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!movie) {
    return <p>Movie details not available.</p>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>

      <p>Year: {movie.Year}</p>

      {movie.Poster !== "N/A" && (
        <img src={movie.Poster} alt={movie.Title} width="200" />
      )}

      <p>{movie.Plot}</p>

      <p>IMDb Rating: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;
