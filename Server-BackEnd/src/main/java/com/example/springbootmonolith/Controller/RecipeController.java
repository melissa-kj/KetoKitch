package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Service.RecipeService;
import com.example.springbootmonolith.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/{username}")
public class RecipeController {

    @Autowired
    public RecipeService recipeService;

    @PostMapping("/recipe")
    public Recipe createRecipe(@RequestBody Recipe newRecipe, @PathVariable String username) {
        return recipeService.createRecipe(newRecipe, username);
    }

    @GetMapping("recipe/list")
    public Iterable<Recipe> listRecipes() {
        return recipeService.listRecipes();
    }

    @DeleteMapping("recipe/delete/{recipeId}")
    public HttpStatus deleteRecipe(@PathVariable Long recipeId) {
        return recipeService.deleteRecipe(recipeId);
    }

}
