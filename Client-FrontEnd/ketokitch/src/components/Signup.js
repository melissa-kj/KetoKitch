import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Home from './Home';
import Layout from './Layout';


const Signup = (props) => {
    return (
      <Layout>
        <h3>New here? Create an account below!</h3>
        <form onSubmit={e => props.submitForm(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={props.email}
              onChange={props.handleEmailChange}
              required
            />
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

            <Button variant="dark" type="submit" value="Signup">Sign up </Button>

        </form>
      </Layout>
    )
  }
export default Signup;
// <Button variant="warning"><Link to="/">Return to Login</Link></Button>
