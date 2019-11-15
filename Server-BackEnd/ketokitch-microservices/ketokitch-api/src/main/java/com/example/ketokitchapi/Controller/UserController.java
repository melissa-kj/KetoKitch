package com.example.ketokitchapi.Controller;


import com.example.ketokitchapi.Model.Recipe;
import com.example.ketokitchapi.Model.JwtResponse;
import com.example.ketokitchapi.Model.User;
import com.example.ketokitchapi.Repository.UserRepository;
import com.example.ketokitchapi.Service.UserService;
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
    public Iterable<Recipe> listUserItems(@PathVariable String username){
        return userService.listUserItems(username);
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
