package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.UserList;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

public class JdbcUserListsDao implements UserListsDao {

    private final JdbcTemplate jdbcTemplate;
    public JdbcUserListsDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public int addToList(UserList userList) {
        String sql = "INSERT INTO public.user_lists(user_list_id, imdb_id, user_id, list) " +
                "VALUES (?, ?, ?, ?);";
        Integer userListId = jdbcTemplate.queryForObject(sql,Integer.class,userList.getUserListId(),
                userList.getImdbId(),userList.getUserId(),userList.getList());
        return userListId;
    }

    @Override
    public void updateList(UserList updatedList) {
        String sql = "UPDATE public.user_lists SET list=?" +
                "WHERE user_list_id=?;";
        jdbcTemplate.update(sql,updatedList.getList(),updatedList.getUserListId());
    }

    @Override
    public void updateRating(UserList updatedRating) {
        String sql = "UPDATE public.user_lists SET rating=? " +
                "WHERE user_list_id=?;";
        jdbcTemplate.update(sql,updatedRating.getRating(),updatedRating.getUserListId());
    }

    @Override
    public List<UserList> getListsAndRatingsForUSer(int userId) {
        List<UserList> userList = new ArrayList<>();
        String sql = "SELECT user_list_id, imdb_id, user_id, list, rating FROM public.user_lists " +
                "WHERE user_id=?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while (results.next()) {
            userList.add(mapRowToUserList(results));
        }
        return userList;
    }

    @Override
    public UserList getListById(int userListId) {
        UserList userList = null;
        String sql = "SELECT user_list_id, imdb_id, user_id, list, rating FROM public.user_lists " +
                "WHERE user_list_id=?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql,userListId);
        if(result.next()) {
            userList = mapRowToUserList(result);
        }
        return userList;
    }

    public UserList mapRowToUserList(SqlRowSet rowSet) {
        try {
            UserList userList = new UserList();
            userList.setUserListId(rowSet.getInt("user_list_id"));
            userList.setImdbId(rowSet.getString("imdb_id"));
            userList.setUserId(rowSet.getInt("user_id"));
            userList.setList(rowSet.getString("list"));
            userList.setRating(rowSet.getInt("rating"));
            return userList;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

    }
}
