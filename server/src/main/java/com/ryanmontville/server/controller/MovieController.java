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

    /*************************************** POST **************************************/

    /*************************************** PUTS **************************************/
    /************************************* DELETES *************************************/
}
