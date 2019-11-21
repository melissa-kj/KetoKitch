import React, { Component } from 'react';
import './style.css';

class RecipePage extends Component {

    render() {
      return (
        <article className="article">
          <img src={this.props.faveRecipe.img} width="350px"/>
              <div id="Ingredients_cont">
                <h1>Ingredients</h1>
                  <ul>
                    {this.props.faveRecipe.ingredients.map ((ingredient, key) => {
                            return <li key={key}>{ingredient}</li>
                        })}
                  </ul>
                </div>
                <h1>Preparation</h1>
                <ol>
                    {this.props.faveRecipe.preparation.map ((preparation, key) => {
                          return <li key={key}>{preparation}</li>
                      })}
                </ol>
            </article>
        )
    }
}

export default RecipePage;
