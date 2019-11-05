package com.ketokitch.KetoKitch.service;

import com.ketokitch.KetoKitch.models.Recipe;
import com.ketokitch.KetoKitch.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    @Override
    public Recipe createRecipe(Recipe recipe) { return recipeRepository.save(recipe); }

    @Override
    public Iterable<Recipe> listRecipes() { return recipeRepository.findAll(); }

    @Override
    public Recipe findById(int id) { return recipeRepository.findById(id); }

    @Override
    public Recipe save(Recipe recipe) { return recipeRepository.save(recipe); }

    @Override
    public void deleteById(int id) { };

}
