import React, { Component } from 'react';
import Layout from './Layout';

class ListRecipes extends Component {

  constructor(props){
    super(props);
    this.state = {
      recipe: [],
      recipeLoaded: false
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/recipe/list", {
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' +
        localStorage.getItem('user'),
        'Content-Type':'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          recipe: res,
          recipeLoaded: true,
        })
      })

      this.state.recipes
  }

  render(){
    return (
      <Layout>
        <h1> All Recipes </h1>
            <div className='recipeCard'>
              <img className='recipePhoto' src={recipe.img} />
              <h3>{recipe.title}</h3>
              <p>Prep time: {recipe.prep_min} minutes</p>

              <h4>Ingredients</h4>
              <ul>
              <li>{recipe.ingredients}</li>
              </ul>

              <h4>Instructions</h4>
              <ol>
              <li>{recipe.instructions}</li>
              </ol>
        </div>
        </Layout>
      )
    }
  }


export default ListRecipes;
