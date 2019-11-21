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
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  nextRecipe = () => {
    console.log(this.state.current)
    if (this.state.current < faveRecipes.length - 1)
    this.setState({ current: this.state.current += 1})
  }
  prevRecipe = () => {
    if (this.state.current > 0) {
    this.setState({ current: this.state.current -= 1})
    }

  }
  render() {
    return (
      <div>
        <NavigationBar />
          <Layout>

            <h2> Browse Our Favorite Keto Recipes! </h2>

            <div className="flex-container">
              <nav className="nav">
                <button onClick={this.prevRecipe}>Previous Recipe</button>
                <button  onClick={this.nextRecipe}>Next Recipe</button>
              </nav>

            <RecipeHeader faveRecipe={faveRecipes[this.state.current]}/>
            <RecipePage faveRecipe={faveRecipes[this.state.current]}/>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Browse;
