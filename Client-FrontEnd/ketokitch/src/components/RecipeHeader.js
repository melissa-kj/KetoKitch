import React, { Component } from 'react';


class RecipeHeader extends Component {
    render() {
        return (
            <header>
              <h1>{this.props.faveRecipe.title}</h1>
              <cite className="contributors">
                  <div>By {this.props.faveRecipe.byline.name}</div>
                  <div><a href="{this.props.faveRecipe.byline.source}" target="_blank">Source</a></div>
              </cite>
              <ul id="recipe_meta_data" className="list-group">
                <li className="list-group-item">Active prep time: {this.props.faveRecipe.activePrep}</li>
                <li className="list-group-item">Total prep time: {this.props.faveRecipe.totalPrep}</li>
                <li className="list-group-item">Servings: {this.props.faveRecipe.servings}</li>
              </ul>
            </header>
        )
    }
}

export default RecipeHeader;
