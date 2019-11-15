package com.example.ketokitchapi.Service;


import com.example.ketokitchapi.Model.Recipe;
import com.example.ketokitchapi.Model.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    public String login(User user)throws Exception;

    public String createUser(User newUser)throws Exception;

    public Iterable<User> listUsers();

    public Iterable<Recipe> listUserItems(String username);

    public User getUser(String username);

    public HttpStatus deleteById(Long userId);

    public User findByUserId(Long userId);
}
