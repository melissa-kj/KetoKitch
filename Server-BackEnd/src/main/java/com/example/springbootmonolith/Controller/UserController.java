package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Repository.UserRepository;
import com.example.springbootmonolith.Service.UserService;
import com.example.springbootmonolith.model.JwtResponse;
import com.example.springbootmonolith.model.Recipe;
import com.example.springbootmonolith.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/user/{username}")
    public User getUsers(String username){
        return userService.getUser(username);
    }

    @GetMapping("/user/list")
    public Iterable<User> listUsers(){
        return userService.listUsers();
    }

    @GetMapping("/user/{username}/items")
    public Iterable<Recipe> listUserRecipes(@PathVariable String username){
        return userService.listUserRecipes(username);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) throws Exception {
            return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @DeleteMapping("/user/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        return userService.deleteById(userId);
    }

}
