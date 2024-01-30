import { Result } from '../models/search-result.model.jsx';
import { Movie, Rating } from './movie.model.tsx'

export default function SearchResult(props: {data: Result}) {
    const result = props.data;
    return <article className="search-result">
        <img src={result.Poster} className='small-poster'/>
        <h2>{result.Title} ({result.Year})</h2>
    </article>
}