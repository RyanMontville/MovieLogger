import { Movie } from "../models/movie.model";

/***************************************** GETS *****************************************/
export async function getAllMovies() {
    return fetch(`http://localhost:9000/movies`).then(res => res.json());
}
export async function getMovieByImdbId(imdbId: string) {
    return fetch(`http://localhost:9000//movies/${imdbId}`).then(res => res.json());
}

  
  
/**************************************** POSTS *****************************************/
export async function newMovie(newMovie: Movie) {
    return fetch('http://localhost:9000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie)
    }).then(data => data.json());
}