package com.ketokitch.KetoKitch.service;

import com.ketokitch.KetoKitch.models.User;
import org.springframework.http.HttpStatus;

public interface UserService {

    public User getUser(String username);

    public Iterable<User> listUsers();

    public User createUser(User newUser);

    public User login(String username, String password);

    public HttpStatus deleteById(Long userId);

    public User addRecipe(String username, int recipeId);
}
