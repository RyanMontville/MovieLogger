"use client"
import { useParams } from "next/navigation";
import MovieInfo from "@/app/components/movie-info";
import { useEffect, useState } from "react";
import { getMovieById } from "@/app/services/omdbService";
import { getMovieByImdbId } from "@/app/services/movieService";
import { Movie } from "@/app/models/movie.model";

export default function Page() {
    const params = useParams<{ imdbid: string}>()
    const movieId = params.imdbid;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const id = movieId;
      setLoading(true);
      getMovieByImdbId(movieId).then((result: any) => {
        if(result.title) {
          setData(result);
        } else {
          getMovieById(movieId).then((result: any) => {
            const newMovie: Movie = new Movie(result.Title, result.Year, result.Rated, result.Released, result.Runtime, result.Genre, result.Director, result.Writer, result.Actors, result.Awards, result.Poster, result.Plot, result.Type, result.DVD, result.BoxOffice, result.imdbID, result.imdbRating, result.Metascore);
            setData(newMovie);
            });
        }
        
        setLoading(false);
        });
      }, [movieId]);

    return <main>
        {loading ? (
        <div>Loading...</div>
        ) : (
        <div>
          {data && <MovieInfo movie={data} />}
        </div>
        )}
      </main>
  }