package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

public class JdbcUserDao implements UserDao{
    private final JdbcTemplate jdbcTemplate;
    public JdbcUserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public int createUser(User newUser) {
        String sql = "INSERT INTO public.users(user_name, role) VALUES (?, ?);";
        Integer userId = jdbcTemplate.queryForObject(sql,Integer.class,newUser.getUsername(),"user");
        return userId;
    }

    @Override
    public boolean isUsernameTaken(String username) {
        String sql = "SELECT user_name FROM public.users WHERE user_name=?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql,username);
        if(result.next()){
            return true;
        }
        return false;
    }

    @Override
    public User getUserByUsername(String username) {
        return null;
    }

    @Override
    public User getUserById(int userId) {
        return null;
    }
}
