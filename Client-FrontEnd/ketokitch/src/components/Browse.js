import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './style.css';
import NavigationBar from './NavigationBar';
import Layout from './Layout';

import Recipe from './Recipe';
import RecipeHeader from './RecipeHeader';

import recipes from '../data/recipes';

const recipe = recipes[0];
console.log(recipe);


class Browse extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
            <Layout><h1> Browse Our Favorite Recipes </h1></Layout>
        <Layout>
        <div className="flex-container">

            <nav className="nav">
            <button className="btn btn-default">Previous Recipe</button>
            <button className="btn btn-default">Next Recipe</button>
            </nav>
            <RecipeHeader recipe={recipe}/>
            <Recipe recipe={recipe}/>
        </div>
        </Layout>
      </div>
    );
  }
}
export default Browse;
