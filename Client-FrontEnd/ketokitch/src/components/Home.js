import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default class Home extends Component {
  // attempting to set state for both login and signup here 
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        username: "",
        password: ""
      },
      loggedIn: false
    }
  }
  LogOn = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email: this.state.user.email,
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res, "Token successful");
      this.setState({
        user: {... this.state.user},
        loggedIn: true,
      })
      localStorage.setItem('user', res.token);
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <h1>keto kitch</h1>
        <h1> home </h1>
        <Signup />
        <Login />
      </div>
    );
  }
}
