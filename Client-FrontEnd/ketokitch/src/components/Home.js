import React, { Component } from "react";
import Button from 'react-bootstrap';
import ReactDom from 'react-dom';

import Login from "./Login";

class Home extends Component {
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
    this.routeLogin = this.routeLogin.bind(this);
    this.routeSignup = this.routeSignup.bind(this);

    routeLogin() {
      let path=`/login`;
      this.props.history.push(path);
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
      console.log(res, "Token success");
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
  handleEmailChange = e => {
    this.setState({user: {... this.state.user, email:
    e.target.value}
  });
}
  handleUsernameChange = e => {
    this.setState({user: {... this.state.user, username:
    e.target.value}
  });
}
  handlePasswordChange = e => {
    this.setState({user: {... this.state.user, password:
    e.target.value}
  });
}
  render() {
    return (
      <div>
        <h1>welcome to the keto kitch </h1>
        <Login
        username={this.state.username}
        password={this.state.password}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        submitForm={e => this.LogOn(e)} />

        <Signup
        email={this.state.email}
        username={this.state.username}
        password={this.state.password}

      </div>
    );
  }
}
export default withRouter (Home);
