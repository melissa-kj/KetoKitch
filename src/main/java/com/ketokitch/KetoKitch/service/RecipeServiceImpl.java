package com.example.KetoKitch.service;

import com.example.KetoKitch.models.Recipe;
import com.example.KetoKitch.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    @Override
    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @Override
    public Iterable<Recipe> listRecipes(){
        return recipeRepository.findAll();
    }
}
