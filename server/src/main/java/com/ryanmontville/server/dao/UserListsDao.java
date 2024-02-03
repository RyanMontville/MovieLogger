package com.ryanmontville.server.dao;

import com.ryanmontville.server.model.UserList;

import java.util.List;

public interface UserListsDao {
    int addToList(UserList userList);
    void updateList(UserList updatedList);
    void updateRating(UserList updatedRating);
    List<UserList> getListsAndRatingsForUSer(int userId);
    UserList getListById(int userListId);
}
