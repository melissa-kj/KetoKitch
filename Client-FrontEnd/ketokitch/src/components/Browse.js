// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// import styled from 'styled-components';
// import NavigationBar from './NavigationBar';
// import Layout from './Layout';
//
// const Styles = styled.div`
//
// #recipe_meta_data {
//   border: 1px solid black;
// }
// #food_image {
//   float: right;
//   padding: 10px;
// }
// #Ingredients_cont {
//   padding: 5px;
// }
//
// .flex-container {
//   display: -webkit-flex;
//   display: flex;
//   -webkit-flex-flow: row wrap;
//   flex-flow: row wrap;
//   flex-direction: column;
//   -webkit-flex-direction: column;
//   text-align: center;
// }
//
// .flex-container > * {
//   padding: 15px;
//   -webkit-flex: 1 100%;
//   flex: 1 100%;
// }
//
// .article {
//   text-align: left;
// }
//
// header {
//   background: black;
// }
//
// header h1, header cite {
//   color: white;
// }
//
// footer {
//   background: #aaa;
//   color: white;
// }
//
// .nav {
//   background: #eee;
//   width: 100%;
// }
//
// .nav ul {
//   list-style-type: none;
//   padding: 0;
// }
//
// .nav ul a {
//   text-decoration: none;
// }
//
// @media all and (min-width: 768px) {
//   .nav {
//     text-align: left;
//     -webkit-flex: 1 auto;
//     flex: 1 auto;
//   }
//   .article {
//     -webkit-flex: 5 0px;
//     flex: 5 0px;
//     -webkit-order: 1;
//     order: 1;
//   }
//   footer {
//     -webkit-order: 3;
//     order: 3;
//   }
//   #food_image {
//     -webkit-order: 4;
//     order: 4;
//   }
// }
// `;
//
//
// class Browse extends Component {
//   render() {
//     return (
//       <div>
//         <NavigationBar />
//             <h1> Browse Our Favorite Recipes </h1>
//         <div className="flex-container">
//             <nav className="nav">
//             <button className="btn btn-default">Previous Recipe</button>
//             <button className="btn btn-default">Next Recipe</button>
//             </nav>
//             <RecipeHeader recipe={recipe}/>
//             <Recipe recipe={recipe}/>
//             <RecipeFooter />
//         </div>
//
//       </div>
//     );
//   }
// }
// export default Browse;
