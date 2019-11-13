import React, { Component } from 'react';
import axios from 'axios';
// import Home from './components/Home';


export default class Signup extends Component {
constructor(props) {
  super(props);

  this.state = {
    email: "",
    username: "",
    password: "",
    loggedIn: false
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
  console.log("handle change", event);
}
handleSubmit(event) {
  const {
    email,
    username,
    password
  } = this.state;

  axios.post("http://localhost:8080/signup", {
      email: email,
      username: username,
      password: password,
      loggedIn: true
  })
  console.log("form submitted");
  event.preventDefault();
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

          <button type="submit">Sign up</button>

        </form>
      </div>
    );
  }
}
