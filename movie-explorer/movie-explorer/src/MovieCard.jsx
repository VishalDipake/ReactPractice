import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "./context/FavoritesContext";

function MovieCard({ movie }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  console.log("MovieCard rendered:", movie);
  console.log("Favorites:", favorites);
  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`}>
        <h3>{movie.Title}</h3>
      </Link>

      {movie.Poster !== "N/A" && (
        <img src={movie.Poster} alt={movie.Title} width="150" />
      )}
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <button
        onClick={() => {
          const alreadyFavorite = favorites.some(
            (fav) => fav.imdbID === movie.imdbID,
          );

          if (!alreadyFavorite) {
            setFavorites([...favorites, movie]);
          }
        }}
      >
        {favorites.some((fav) => fav.imdbID === movie.imdbID)
          ? "❤️ Favorited"
          : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
