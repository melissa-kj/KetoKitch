import React, { Component } from 'react';
import Layout from './Layout';
import Recipe from './Recipe';

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
  }

  render(){
    return (
      <Layout>
        <h1> All Recipes </h1>
            <div className='recipeCard'>
              <img className='recipePhoto' src={Recipe.img} />
              <h3>{Recipe.title}</h3>
              <p>Prep time: {Recipe.prep_min} minutes</p>

              <h4>Ingredients</h4>
              <ul>
              <li>{Recipe.ingredients}</li>
              </ul>

              <h4>Instructions</h4>
              <ol>
              <li>{Recipe.instructions}</li>
              </ol>
        </div>
        </Layout>
      )
    }
  }


export default ListRecipes;
