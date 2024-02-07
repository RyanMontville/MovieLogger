package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class JdbcUserDao implements UserDao{
    private final JdbcTemplate jdbcTemplate;
    public JdbcUserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
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
        User user = null;
        String sql = "SELECT user_id, user_name, role FROM public.users WHERE user_name = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql,username);
        if(result.next()) {
            user = mapRowToUser(result);
        }
        return user;
    }

    @Override
    public User getUserById(int userId){
        User user = null;
        String sql = "SELECT user_id, user_name, role FROM public.users WHERE user_id = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql,userId);
        if(result.next()) {
            user = mapRowToUser(result);
        }
        return user;
    }

    @Override
    public int createUser(User newUser) {
        String sql = "INSERT INTO public.users(user_name, role) VALUES (?, ?);";
        Integer userId = jdbcTemplate.queryForObject(sql,Integer.class,
                newUser.getUsername(),newUser.getRole());
        return userId;
    }

    public User mapRowToUser(SqlRowSet rowSet) {
        try {
            User user = new User();
            user.setUserId(rowSet.getInt("user_id"));
            user.setUsername(rowSet.getString("user_name"));
            user.setRole(rowSet.getString("role"));
            return user;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

    }
}
