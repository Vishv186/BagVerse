package com.bagverse.bagverse_backend.service;

import com.bagverse.bagverse_backend.entity.User;
import java.util.List;

public interface UserService {

    User registerUser(User user);

    List<User> getAllUsers();

    User getUserId(Long id);

    void deleteUser(Long id);
}
