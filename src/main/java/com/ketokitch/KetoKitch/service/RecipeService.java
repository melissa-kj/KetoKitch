package com.example.KetoKitch.service;

import com.example.KetoKitch.models.Recipe;

public interface RecipeService {

    public Recipe createRecipe(Recipe recipe);

    public Iterable<Recipe> listRecipes();
}
