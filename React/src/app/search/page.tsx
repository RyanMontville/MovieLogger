import Link from 'next/link'
import { Result } from '../models/search-result.model'
import SearchResult from '../components/SearchResult'

async function getData() {
  const res = await fetch('http://www.omdbapi.com/?s=toy story&apikey=766ffdd6&type=movie')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data: {Search: Result[]} = await getData()
  return (
    <div>
      <main>
      <h1>Results for Toy Story</h1>
    </main>
    <div className='collection'>
      
      
      {data.Search.map((result: Result) => (
        <SearchResult data={result} />
      ))}
      </div>
    </div>
  )
}