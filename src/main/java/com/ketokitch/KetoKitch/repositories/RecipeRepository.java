package com.ketokitch.KetoKitch.repositories;

import com.ketokitch.KetoKitch.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
    Recipe findById(int id);
}
