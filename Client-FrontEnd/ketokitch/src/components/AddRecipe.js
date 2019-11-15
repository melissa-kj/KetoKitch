import React from 'react';
import Recipe from './Recipe'

const AddRecipe = (props) => {
  return (
    <div>
      <form
      onSubmit={e => props.submitForm(e)}>

        <input
          type="text"
          label="Title"
          value={props.title}
          onChange={props.handleTitleChange}
          id="recipeTitle"
          placeholder="Title"
        />

        <input
          type="text"
          label="Photo"
          value={props.img}
          onChange={props.handlePhotoChange}
          id="recipePhoto"
          placeholder="Photo URL"
        />

          <input
            type="text"
            label="Prep"
            value={props.prep_min}
            onChange={props.handlePrepChange}
            id="prep"
            placeholder="Prep Time (minutes)"
          />
          <textarea
          type="text"
          label="Ingredients"
          value={props.ingredients}
          onChange={props.handleIngredientsChange}
          id="ingredients"
          placeholder="Ingredients (separated by comma)"
        />

        <textarea
        type="text"
        label="Instructions"
        value={props.instructions}
        onChange={props.handleInstructionsChange}
        id="instructions"
        placeholder="Instructions (separated by comma)"
      />
        <input
        className="submit"
        type="submit" value="Add recipe" />
      </form>
    </div>
  )
}

export default AddRecipe;
