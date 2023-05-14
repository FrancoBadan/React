import { PeliculasGrid } from "./components/PeliculasGrid";
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
        <Route path="/" element={<PeliculasGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
