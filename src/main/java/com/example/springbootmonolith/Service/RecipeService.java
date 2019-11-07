package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.model.Recipe;
import org.springframework.http.HttpStatus;

public interface RecipeService {


    public Recipe createRecipe(Recipe newRecipe, String username);


    public Iterable<Recipe> listRecipes();


    public HttpStatus deleteRecipe(Long recipeId);


}
