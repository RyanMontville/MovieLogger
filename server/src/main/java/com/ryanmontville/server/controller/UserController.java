package com.ryanmontville.server.controller;

import com.ryanmontville.server.dao.JdbcUserDao;
import com.ryanmontville.server.dao.JdbcUserListsDao;
import com.ryanmontville.server.model.User;
import com.ryanmontville.server.model.UserList;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    private JdbcUserDao userDao;
    private JdbcUserListsDao userListsDao;
    public UserController(JdbcUserDao userDao, JdbcUserListsDao userListsDao) {
        this.userDao = userDao;
        this.userListsDao = userListsDao;
    }

    @RequestMapping(path = "users/{username}", method = RequestMethod.GET)
    public User getUserByUsername(@PathVariable String username) {
        User user = userDao.getUserByUsername(username);
        if(user==null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found.");
        } else {
            return user;
        }
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/users", method = RequestMethod.POST)
    public int newUser(@RequestBody User newUser) throws Exception {
        boolean isUsernameTaken = userDao.isUsernameTaken(newUser.getUsername());
        if(isUsernameTaken) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already taken.");
        } else {
            int userId = userDao.createUser(newUser);
            return userId;
        }
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/addtolist", method = RequestMethod.POST)
    public int addMovieToList(@RequestBody UserList newListItem) throws Exception {
        boolean isMovieOnList = userListsDao.isMovieOnList(newListItem.getImdbId(), newListItem.getUserId());
        if(isMovieOnList) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Movie already added to list.");
        } else {
            int userListItemId = userListsDao.addToList(newListItem);
            return userListItemId;
        }
    }

    @RequestMapping(path = "/users/{userId}/lists", method = RequestMethod.GET)
    public List<UserList> getListsForUserId(@PathVariable int userId) {
        return userListsDao.getListsAndRatingsForUser(userId);
    }

}
