import React, { Component } from 'react';
// import Home from './components/Home';


const Signup = (props) => {
    return (
      <div>
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

            <input className="submit" type="submit" value="Signup"/>

        </form>
      </div>
    )
  }
export default Signup;
