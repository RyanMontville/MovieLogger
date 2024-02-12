package com.ryanmontville.server.model;

public class UserList {
    private int userListId;
    private int userId;
    private String imdbId;
    private String title;
    private String poster;
    private String list;
    private int rating;

    public UserList() {}

    public UserList(int userListId, int userId, String imdbId, String title, String poster, String list, int rating) {
        this.userListId = userListId;
        this.userId = userId;
        this.imdbId = imdbId;
        this.title = title;
        this.poster = poster;
        this.list = list;
        this.rating = rating;
    }

    public int getUserListId() {
        return userListId;
    }

    public void setUserListId(int userListId) {
        this.userListId = userListId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getList() {
        return list;
    }

    public void setList(String list) {
        this.list = list;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
