import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default class Home extends Component {
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
