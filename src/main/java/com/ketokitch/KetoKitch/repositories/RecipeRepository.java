package com.example.KetoKitch.repositories;

import com.example.KetoKitch.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
}
