// import peliculas from "./peliculas.json";
import { get } from "../utils/httpCliente.js";
import { useEffect, useState } from "react";

import { PeliculasCard } from "./PeliculasCard";
import "./PeliculasGrid.css";

export const PeliculasGrid = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setPeliculas(data.results);
    });
  }, []);

  return (
    <ul className="moviesGrid">
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
};
