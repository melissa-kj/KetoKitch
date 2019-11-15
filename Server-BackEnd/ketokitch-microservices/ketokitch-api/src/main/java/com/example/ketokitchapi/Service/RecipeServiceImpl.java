package com.example.ketokitchapi.Service;

import com.example.ketokitchapi.Config.IAuthentication;
import com.example.ketokitchapi.Model.Recipe;
import com.example.ketokitchapi.Model.User;
import com.example.ketokitchapi.Repository.RecipeRepository;
import com.example.ketokitchapi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @Override
    public Iterable<Recipe> listRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public Recipe postRecipe(Recipe newRecipe){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newRecipe.setUser(user);
        user.getItems();

        return recipeRepository.save(newRecipe);
    }
}
