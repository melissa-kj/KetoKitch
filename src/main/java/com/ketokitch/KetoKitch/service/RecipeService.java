package com.ketokitch.KetoKitch.service;

import com.ketokitch.KetoKitch.models.Recipe;

public interface RecipeService {

    public Recipe createRecipe(Recipe recipe);

    public Iterable<Recipe> listRecipes();

    public Recipe findById( int id);

    public Recipe save(Recipe recipe);

    void deleteById(int id);
}
