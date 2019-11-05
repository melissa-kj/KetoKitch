package com.ketokitch.KetoKitch.service;

import com.ketokitch.KetoKitch.models.Recipe;
import com.ketokitch.KetoKitch.models.User;
import com.ketokitch.KetoKitch.repositories.RecipeRepository;
import com.ketokitch.KetoKitch.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RecipeService recipeService;

    @Autowired
    RecipeRepository recipeRepository;

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Iterable<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User newUser) { return userRepository.save(newUser);}

    @Override
    public User login(String username, String password) {
        return userRepository.login(username, password);
    }

    @Override
    public User addRecipe(String username, int recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId);
        User user = getUser(username);
        user.addRecipe(recipe);

        return userRepository.save(user);
    }

    @Override
    public HttpStatus deleteById(Long userId){
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }
}
