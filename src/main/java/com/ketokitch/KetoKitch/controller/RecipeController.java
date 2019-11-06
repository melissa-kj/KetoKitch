package com.example.KetoKitch.controller;

import com.example.KetoKitch.models.Recipe;
import com.example.KetoKitch.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipe")
public class RecipeController {

    @Autowired
    RecipeService recipeService;

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe){
        return recipeService.createRecipe(recipe);
    }

    @GetMapping("/list")
    public Iterable<Recipe> listRecipes(){
        return recipeService.listRecipes();
    }

}
