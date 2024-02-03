package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.Movie;

import java.util.List;

public interface MovieDao {
    List<Movie> getAllMovies();
    Movie getMovieByImdbId(String imdbId);
    int addMovie(Movie movie);

}
