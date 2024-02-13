"use client"
import { useParams } from "next/navigation";
import MovieInfo from "@/app/components/movie-info";
import { useEffect, useState } from "react";
import { getMovieById } from "@/app/services/omdbService";
import { getMovieByImdbId, newMovie } from "@/app/services/movieService";
import { Movie } from "@/app/models/movie.model";
import style from "../page.module.css";
import { useSelector } from "react-redux";
import { UserListItem } from "@/app/models/userListItem.model";
import { addNewListItem } from "@/app/services/userService";
import { useRouter } from 'next/navigation'
import { stringify } from "querystring";

export default function Page() {
    const params = useParams<{ imdbid: string}>()
    const movieId = params.imdbid;
    const [data, setData] = useState<Movie>(new Movie("","","","","","","","","","","","","","","","","",""));
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: any) => state.user);
    const userId = user[0].userId;
    const router = useRouter();
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

      function handleAddToWatchList() {
        newMovie(data);
        const newListItem: UserListItem = {
          userListId: 0,
          userId: userId,
          imdbId: movieId,
          title: "",
          poster: "",
          list: "watchlist",
          rating: 0
        }
        const response = addNewListItem(newListItem);
        router.push('/');
      }

      function handleAddToWatched() {
        
      }

    return <main>
        {loading ? (
        <div>Loading...</div>
        ) : (
        <div>
          {data && <MovieInfo movie={data} />}
        </div>
        )}
        {(userId!==0) && 
          <div className={style.addToList}>
            <div className={style.buttonRow}>
            <button onClick={handleAddToWatchList} className={style.button}>Add to watch List</button>
            <button onClick={handleAddToWatched} className={style.button}>Add to Watched</button>
            </div>
          </div>
        }
      </main>
  }