import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import Home from './Home';
import Layout from './Layout';


const Login = (props) => {
    return (
      <Layout>
        <h3> Login </h3>
        <form onSubmit={e => props.submitForm(e)}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={props.username}
              onChange={props.handleUsernameChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={props.password}
              onChange={props.handlePasswordChange}
              required
            />

          <Button variant="dark" type="submit" value="Login">Login </Button>

        </form>
      </Layout>
    );
  }
export default Login;


// .then(response => {
// createRecipe();
// })
// .then(response => {
// createComment();
// })
// .then(response =>{
// deleteRecipe();
// })
// .then(response =>{
// deleteComment();
// })
// .then(response =>{
// profile();
// })
