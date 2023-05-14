// import { PeliculasGrid } from "./components/PeliculasGrid";
import { LandingPage } from "./pages/LandingPage.jsx";
import { DetallePelicula } from "./pages/DetallePelicula.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="title">
        <Link to="/">
          <h1 className="title">Pelicula</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula/:peliculaId" element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
