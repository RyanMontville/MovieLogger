"use client"
import { useParams } from "next/navigation";
import MovieInfo from "@/app/components/movie-info";
import { useEffect, useState } from "react";
import { getMovieById } from "@/app/services/omdbService";

export default function Page() {
    const params = useParams<{ imdbid: string}>()
    const movieId = params.imdbid;
    const [data, setData] = useState({});
    
    useEffect(() => {
      getMovieById(movieId).then((result: any) => {
        setData(result);
      })
    });

    return <main>
        <MovieInfo movie={data} />
      </main>
  }