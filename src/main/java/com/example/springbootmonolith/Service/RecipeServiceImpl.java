package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Repository.RecipeRepository;
import com.example.springbootmonolith.Repository.UserRepository;
import com.example.springbootmonolith.model.Recipe;
import com.example.springbootmonolith.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public Recipe createRecipe(Recipe newRecipe, String username) {
         User user = userRepository.findByUsername(username);
         newRecipe.setUser(user);

         return recipeRepository.save(newRecipe);

    }

    @Override
    public Iterable<Recipe> listRecipes() {
        return recipeRepository.findAll();
    }


    @Override

    public HttpStatus deleteRecipe(Long recipeId) {
        recipeRepository.deleteById(recipeId);
        return HttpStatus.OK;
    }




}

