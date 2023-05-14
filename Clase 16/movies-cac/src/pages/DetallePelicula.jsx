import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente";
import { useParams } from "react-router-dom";

export const DetallePelicula = () => {
  const [pelicula, setPelicula] = useState(null);

  const { peliculaId } = useParams();

  useEffect(() => {
    get(`/movie/${peliculaId}`).then((data) => {
      setPelicula(data);
    });
  }, [peliculaId]);

  if (!pelicula) {
    return null;
  }

  const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
  return(
<div className="contenedorDetalle">
    <img src={imgURL} alt={pelicula.title} className="col" />
<div className="peliculaDetalle">
    <p className="item">
        <strong>Descripcion:</strong>
        {pelicula.overview}
    </p>
    <p className="item">
        <strong>Genero:</strong>
        {pelicula.genres.map(genre=>genre.name).join(",")}
    </p>
</div>
</div>
  )
};
