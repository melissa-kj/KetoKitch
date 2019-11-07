package com.example.springbootmonolith.Repository;

import com.example.springbootmonolith.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository <Recipe, Long> {

}
