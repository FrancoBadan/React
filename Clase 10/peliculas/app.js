// funcion para cargar pelicula

let pagina = 1;

// capturar los botones

let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

// funcion anterior

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas()
    // llamar a la funcion que cargue la pagina
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    pagina += 1; //++
    cargarPeliculas()
    // llamar a la funcion que cargue la pagina
  }
});

// funcion qu cargue las peliculas

const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=01c460aed21ec58247eb158a4d5edb8b&language=es-MX&page=${pagina}`
    );
    if (respuesta.status === 200) {
      let datos = await respuesta.json();

      let peliculas = "";

      datos.results.forEach(pelicula => {
        peliculas+=`<div class="pelicula"> 
        <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
        <h3 class="titulo">${pelicula.original_title} </h3>       
        </div>`
      });

      document.querySelector(".contenedor").innerHTML = peliculas;

    } else if (respuesta.status === 404) {
      console.log("error 404 nos en otro lugar");
    }
  } catch (error) {}
};


