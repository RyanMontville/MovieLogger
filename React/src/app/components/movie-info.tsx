import { Movie, Rating } from './movie.model.tsx';
import Image from 'next/image.js';

function ratingsLogo(site: string) {
    if(site == "Internet Movie Database")
        return(<><Image src='/imdb.png' width="43" height="25" alt="IMDB" /></>)
    if(site == "Rotten Tomatoes")
        return(<><Image src='/rt.png' width="25" height="25" alt="Rotten Tomatoes" /></>)
    if(site == "Metacritic")
    return(<><Image src='/mc.png' width="25" height="25" alt="Metacritic" /></>)
}

export default function MovieInfo(props: Movie) {
    const movie = props.movie;
    return <article className="movie-info">
        <img src={movie.Poster} />
        <section className='info'>
            <h2>{movie.Title}</h2>
            <ul className='info-line'>
                <li><b>Rating:</b> {movie.Rated}</li>
                <li><b>Released:</b> {movie.Released}</li>
                <li><b>Runtime:</b> {movie.Runtime}</li>
            </ul>
            <p><b>Director:</b> {movie.Director}</p>
            <p><b>Writer(s):</b> {movie.Writer}</p>
            <p><b>Starring:</b> {movie.Actors}</p>
            <p className='plot'>{movie.Plot}</p>
            <ul className="ratings">
                {movie.Ratings.map((rating: Rating) => (
            <li>{ratingsLogo(rating.Source)} {rating.Value}</li>
          ))}
        </ul>
        </section>
        
    </article>
}