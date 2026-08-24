import { useContext } from "react";
import FavoritesContext from "./context/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1> Favorites </h1>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Favorites;
