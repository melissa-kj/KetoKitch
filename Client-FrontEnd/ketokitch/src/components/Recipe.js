import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import ListRecipes from './ListRecipes';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      recipeLoaded: false
    }
  }
  CreateRecipe = (e) => {
    fetch('http://localhost:8080/recipe', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' +
      localStorage.getItem('user'),

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        img: this.state.img,
        prep_min: this.state.prep_min,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions
      })
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      this.setState({
        recipe: {...this.state.recipe},
        recipeLoaded: true
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

handleTitleChange = (e) => {
  this.setState({ title: e.target.value })
}
handlePhotoChange = (e) => {
  this.setState({ img: e.target.value})
}
handlePrepChange = (e) => {
  this.setState({ prep_min: e.target.value})
}
handleIngredientsChange = (e) => {
  this.setState({ ingredients: e.target.value})
}
handleInstructionsChange = (e) => {
  this.setState({ instructions: e.target.value})
}

render(){
  return(

    <div>

    <AddRecipe
      title={this.state.title}
      img={this.state.img}
      prep_min={this.state.prep_min}
      ingredients={this.state.ingredients}
      instructions={this.state.instructions}
      handleTitleChange={this.handleTitleChange}
      handlePhotoChange={this.handlePhotoChange}
      handlePrepChange={this.handlePrepChange}
      handleIngredientsChange={this.handleIngredientsChange}
      handleInstructionsChange={this.handleInstructionsChange}
      submitForm={e => this.CreateRecipe(e)}/>

  <ListRecipes />
    </div>

    )
  }
}
export default Recipe;
