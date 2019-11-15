import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './style.css';
import NavigationBar from './NavigationBar';
import Layout from './Layout';

import RecipePage from './RecipePage';
import RecipeHeader from './RecipeHeader';

import faveRecipes from '../data/faveRecipes';

const faveRecipe = faveRecipes[0];
console.log(faveRecipe);


class Browse extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
          <h1> Browse Our Favorite Keto Recipes! </h1>
        <Layout>
        <div className="flex-container">

            <nav className="nav">
            <button className="btn btn-default">Previous Recipe</button>
            <button className="btn btn-default">Next Recipe</button>
            </nav>
            <RecipeHeader faveRecipe={faveRecipe}/>
            <RecipePage faveRecipe={faveRecipe}/>
        </div>
        </Layout>
      </div>
    );
  }
}
export default Browse;
