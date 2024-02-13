package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.Movie;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcMovieDao implements MovieDao {
    private final JdbcTemplate jdbcTemplate;
    public JdbcMovieDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Movie> getAllMovies() {
        List<Movie> movies = new ArrayList<>();
        String sql = "SELECT imdb_id, title, year, rated, released, runtime, genre, director, writer, " +
                "actors, awards, poster, plot, type, dvd, box_office, imdb_rating, mc_rating " +
                "FROM public.movies ORDER BY title ASC;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);
        while (result.next()) {
            movies.add(mapRowToMovie(result));
        }
        return movies;
    }

    @Override
    public Movie getMovieByImdbId(String imdbId) {
        Movie movie = null;
        String sql = "SELECT movie_id, imdb_id, title, year, rated, released, runtime, genre, director, writer, actors, awards, poster, plot, type, dvd, box_office, imdb_rating, mc_rating FROM public.movies WHERE imdb_id=?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql,imdbId);
        if(result.next()){
            movie = mapRowToMovie(result);
        }
        return movie;
    }

    @Override
    public int addMovie(Movie movie) {
        String sql = "INSERT INTO public.movies(imdb_id, title, year, rated, released, runtime, genre, " +
                "director, writer, actors, awards, poster, plot, type, dvd, box_office, imdb_rating, mc_rating) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        Integer imdbId = jdbcTemplate.queryForObject(sql,Integer.class,movie.getImdbId(),movie.getTitle(),
                movie.getYear(),movie.getRated(),movie.getReleased(),movie.getRuntime(),movie.getGenre(),
                movie.getDirector(),movie.getWriter(),movie.getActors(),movie.getAwards(),movie.getPoster(),
                movie.getPlot(),movie.getType(),movie.getDvd(),movie.getBox_office(),
                movie.getImdb_rating(),movie.getMc_rating());
        return imdbId;
    }

    public Movie mapRowToMovie(SqlRowSet rowset) {
        try {
            Movie movie = new Movie();
            movie.setImdbId(rowset.getString("imdb_id"));
            movie.setTitle(rowset.getString("title"));
            movie.setYear(rowset.getString("year"));
            movie.setRated(rowset.getString("rated"));
            movie.setReleased(rowset.getString("released"));
            movie.setRuntime(rowset.getString("runtime"));
            movie.setGenre(rowset.getString("genre"));
            movie.setDirector(rowset.getString("director"));
            movie.setWriter(rowset.getString("writer"));
            movie.setActors(rowset.getString("actors"));
            movie.setAwards(rowset.getString("awards"));
            movie.setPoster(rowset.getString("poster"));
            movie.setPlot(rowset.getString("plot"));
            movie.setType(rowset.getString("type"));
            movie.setDvd(rowset.getString("dvd"));
            movie.setBox_office(rowset.getString("box_office"));
            movie.setImdb_rating(rowset.getString("imdb_rating"));
            movie.setMc_rating(rowset.getString("mc_rating"));
            return movie;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }
}
