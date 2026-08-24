import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import Favorites from "./Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
