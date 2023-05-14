import "./PeliculasCard.css"
import { Link } from "react-router-dom"



export const PeliculasCard = ({pelicula})=>{

    const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

    return(
        <li className="movieCard">
            <Link to={`pelicula/${pelicula.id}`}>
            <img className="movieImage" src={imgURL} alt={pelicula.title} />
            <div>{pelicula.title}</div>
            </Link>
        </li>
    )

}