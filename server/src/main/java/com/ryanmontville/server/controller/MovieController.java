package com.ryanmontville.server.controller;

import com.ryanmontville.server.dao.JdbcMovieDao;
import com.ryanmontville.server.model.Movie;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class MovieController {
    private JdbcMovieDao movieDao;
    public MovieController(JdbcMovieDao movieDao) {
        this.movieDao = movieDao;
    }
    /*************************************** GETS **************************************/
    @RequestMapping(path = "/movies", method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        return movieDao.getAllMovies();
    }
    @RequestMapping(path = "/movies/{imdbId}", method = RequestMethod.GET)
    public Movie getMovieByImdbId(String imdbId) {
        Movie movie = movieDao.getMovieByImdbId(imdbId);
        if(movie==null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not in local database.");
        } else {
            return movie;
        }
    }

    /*************************************** POST **************************************/
    @RequestMapping(path = "/movies", method = RequestMethod.POST)
    public boolean addMovie(@RequestBody Movie movie) {
        Movie movieCheck = movieDao.getMovieByImdbId(movie.getImdbId());
        if(movieCheck == null) {
            movieDao.addMovie(movie);
            return true;
        }
        return false;
    }
}
