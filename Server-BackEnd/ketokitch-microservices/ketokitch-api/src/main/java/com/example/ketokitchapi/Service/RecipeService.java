package com.example.ketokitchapi.Service;

import com.example.ketokitchapi.Model.Recipe;

public interface RecipeService {

    public Iterable<Recipe> listRecipes();

    public Recipe postRecipe(Recipe newRecipe);


}
