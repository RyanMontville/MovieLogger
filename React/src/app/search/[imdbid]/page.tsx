"use client"
import { useParams } from "next/navigation";
import MovieInfo from "@/app/components/movie-info";
import { useEffect, useState } from "react";
import { getMovieById } from "@/app/services/omdbService";
import { Movie } from "@/app/models/movie.model";

export default function Page() {
    const params = useParams<{ imdbid: string}>()
    const movieId = params.imdbid;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      setLoading(true);
      getMovieById(movieId).then((result: any) => {
        const newMovie: Movie = new Movie(result.Title, result.Year, result.Rated, result.Released, result.Runtime, result.Genre, result.Director, result.Writer, result.Actors, result.Awards, result.Poster, result.Plot, result.Type, result.DVD, result.BoxOffice, result.imdbID);
        const ratings = result.Ratings;
        alert(JSON.stringify(ratings));
        FIX THE RAINGS
        ratings.forEach((rating: {Source: string, Value: string}) => {
          if(rating.Source === "Metacritic" && rating.Value) {
            alert(result.Value)
            newMovie.setMC_rating(result.Value);
          } 
          if(rating.Source === "Internet Movie Database" && rating.Value) {
            alert(result.Value)
            newMovie.setImdb_rating(result.Value);
          }
          if(rating.Source === "Rotten Tomatoes" && rating.Value) {
            alert(result.Value)
            newMovie.setImdb_rating(result.Value);
          }
        });
        alert(newMovie.rt_rating);
        setData(newMovie);
        setLoading(false);
      })
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