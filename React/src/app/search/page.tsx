import Link from 'next/link'
import { Result } from '../models/search-result.model.tsx'
import SearchResult from '../components/SearchResult.tsx'

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
    <main>
      <h1>Search page</h1>
      {data.Search.map((result: Result) => (
        <SearchResult data={result} />
      ))}
    </main>
  )
}