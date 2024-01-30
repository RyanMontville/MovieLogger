import Link from 'next/link'
import { Movie, Rating } from './movie.tsx'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react'

async function getData() {
  const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=766ffdd6')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data: Movie = await getData()
  return (
    <main>
      <h1>Search page</h1>
      <article className='movie-info'>
        <h2>{data.Title} ({data.Year})</h2>
        <p>{data.Plot}</p>
        <ul className="ratings">
          {data.Ratings.map((rating: Rating) => (
            <li>{rating.Source}: {rating.Value}</li>
          ))}
        </ul>
        <img src={data.Poster} />
      </article>
    </main>
  )
}