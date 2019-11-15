package com.example.ketokitchapi.Controller;

import com.example.ketokitchapi.Config.IAuthentication;
import com.example.ketokitchapi.Model.Recipe;
import com.example.ketokitchapi.Service.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    public RecipeService recipeService;

    @Autowired
    IAuthentication authImpl;

    @GetMapping("/list")
    public Iterable<Recipe> listRecipes() { return recipeService.listRecipes(); }

    @PostMapping
    public Recipe postRecipe(@RequestBody Recipe newRecipe) {
        return recipeService.postRecipe(newRecipe);
    }

}
