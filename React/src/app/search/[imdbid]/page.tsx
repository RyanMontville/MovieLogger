"use client"
import { useParams } from "next/navigation"
import { Movie, Rating } from './movie.model.tsx'
import MovieInfo from "@/app/components/movie-info"

async function getData(movieId: string) {
    const res = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=766ffdd6`)
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

export default async function Page() {
    const params = useParams<{ imdbid: string}>()
    const movieId = params.imdbid;
    const data: Movie = await getData(movieId)
    return <main>
        <MovieInfo movie={data} />
      </main>
  }