package com.ryanmontville.server.model;

public class Movie {
    private String imdbId;
    private String title;
    private String year;
    private String rated;
    private String released;
    private String runtime;
    private String genre;
    private String director;
    private String writer;
    private String actors;
    private String awards;
    private String poster;
    private String plot;
    private String type;
    private String dvd;
    private String box_office;
    private String rt_rating;
    private String imdb_rating;
    private String mc_rating;
    public Movie() {}

    public Movie(String imdbId, String title, String year, String rated, String released,
                 String runtime, String genre, String director, String writer, String actors,
                 String awards, String poster, String plot, String type, String dvd,
                 String box_office, String imdb_rating, String mc_rating) {
        this.imdbId = imdbId;
        this.title = title;
        this.year = year;
        this.rated = rated;
        this.released = released;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        this.writer = writer;
        this.actors = actors;
        this.awards = awards;
        this.poster = poster;
        this.plot = plot;
        this.type = type;
        this.dvd = dvd;
        this.box_office = box_office;
        this.imdb_rating = imdb_rating;
        this.mc_rating = mc_rating;
    }

    public String getImdbId() {
        return imdbId;
    }

    public String getTitle() {
        return title;
    }

    public String getYear() {
        return year;
    }

    public String getRated() {
        return rated;
    }

    public String getReleased() {
        return released;
    }

    public String getRuntime() {
        return runtime;
    }

    public String getGenre() {
        return genre;
    }

    public String getDirector() {
        return director;
    }

    public String getWriter() {
        return writer;
    }

    public String getActors() {
        return actors;
    }

    public String getAwards() {
        return awards;
    }

    public String getPoster() {
        return poster;
    }

    public String getPlot() {
        return plot;
    }

    public String getType() {
        return type;
    }

    public String getDvd() {
        return dvd;
    }

    public String getBox_office() {
        return box_office;
    }

    public String getImdb_rating() {
        return imdb_rating;
    }

    public String getMc_rating() {
        return mc_rating;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setRated(String rated) {
        this.rated = rated;
    }

    public void setReleased(String released) {
        this.released = released;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public void setAwards(String awards) {
        this.awards = awards;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDvd(String dvd) {
        this.dvd = dvd;
    }

    public void setBox_office(String box_office) {
        this.box_office = box_office;
    }

    public void setImdb_rating(String imdb_rating) {
        this.imdb_rating = imdb_rating;
    }

    public void setMc_rating(String mc_rating) {
        this.mc_rating = mc_rating;
    }
}

