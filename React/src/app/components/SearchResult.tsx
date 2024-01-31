import { Result } from '../models/search-result.model.jsx';
import Link from 'next/link'

export default function SearchResult(props: { data: Result }) {
    const result = props.data;
    const movieTitle = props.data.Title
    return (<div className="search-result">
        <Link href={`/search/${result.imdbID}`}>
            <img src={result.Poster} className='small-poster' title={result.Title} />
        </Link>
    </div>)
}