import React, { Component } from 'react';
// import Home from './components/Home';


export default class Login extends Component {
constructor(props) {
  super(props);

  this.state = {
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
    username,
    password
  } = this.state;

  axios.post("http://localhost:8080/login", {
      username: username,
      password: password,
      loggedIn: true
  }).then(response => {
    localStorage.setItem('user', response.token);
    console.log("login response", response);
  })
  .catch(error => {
    console.log("login error", error);
  })
  console.log("login successful");
  event.preventDefault();
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Login</button>

        </form>
      </div>
    );
  }
}
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
