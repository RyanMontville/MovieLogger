import { Movie } from '../models/movie.model';
import Image from 'next/image.js';

function ratingsLogo(site: string) {
    if(site == "Internet Movie Database")
        return(<><Image src='/imdb.png' width="43" height="25" alt="IMDB" /></>)
    if(site == "Rotten Tomatoes")
        return(<><Image src='/rt.png' width="25" height="25" alt="Rotten Tomatoes" /></>)
    if(site == "Metacritic")
    return(<><Image src='/mc.png' width="25" height="25" alt="Metacritic" /></>)
}

export default function MovieInfo(props: any) {
    const movie: Movie = props.movie;
    const movjson = JSON.stringify(movie);
    return <article className="movie-info">
        <img src={movie.poster} />
        <section className='info'>
            <h2>{movie.title}</h2>
            <ul className='info-line'>
                <li><b>Rating:</b> {movie.rated}</li>
                <li><b>Released:</b> {movie.released}</li>
                <li><b>Runtime:</b> {movie.runtime}</li>
            </ul>
            <p><b>Director:</b> {movie.director}</p>
            <p><b>Writer(s):</b> {movie.writer}</p>
            <p><b>Starring:</b> {movie.actors}</p>
            <p className='plot'>{movie.plot}</p>
            <ul className="ratings">
                {movie.rt_rating && <li><Image src='/rt.png' width="25" height="25" alt="Rotten Tomatoes" /> {movie.rt_rating}</li>}
                {movie.imdb_rating && <li><Image src='/imdb.png' width="43" height="25" alt="IMDB" /> {movie.imdb_rating}</li>}
                {movie.mc_rating && <li><Image src='/mc.png' width="25" height="25" alt="Metacritic" /> {movie.mc_rating}</li>}
            </ul>
            {movjson}
        </section>
    </article>
}