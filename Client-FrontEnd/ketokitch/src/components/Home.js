import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import Background from "../assets/Welcome.png";

import Layout from './Layout';

import Login from "./Login";
import Signup from "./Signup";
// import styled from 'styled-components';

// const Styled = styled.div`
//   height: 100vh;
//   background-image: url();
// `;

const pageStyle = {
  height: '100vh',
  backgroundImage: `url(${Background})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover'
}
class Home extends Component {
  // state for both login and signup on home page
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
    console.log("test")
    fetch("http://localhost:8081/login", {
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
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response, "Token success");
      this.setState({
        user: {...this.state.user},
        loggedIn: true,
      })
      localStorage.setItem('user', response.token);
    })
    .catch(error => {
      console.log(error);
    })
  }

    Register = (e) => {
      e.preventDefault();

      fetch("http://localhost:8081/signup", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
        email: this.state.user.email,
        username: this.state.user.username,
        password: this.state.user.password
        })
      })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response, "Token successful");
        this.setState({
          user: {...this.state.user},
          loggedIn: true
        });
        localStorage.setItem('user', response.token);
      })
      .catch(err => {
        console.log(err);
      });
    }

  handleEmailChange = e => {
    this.setState({user: {...this.state.user, email:
    e.target.value}
  });
}
  handleUsernameChange = e => {
    this.setState({user: {...this.state.user, username:
    e.target.value}
  });
}
  handlePasswordChange = e => {
    this.setState({user: {...this.state.user, password:
    e.target.value}
  });
}
  render() {
    if(this.state.loggedIn) {
      return <Redirect to= "/Browse" />;
    }
    return (
      <div style={pageStyle} className="splash">
      <Layout>

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
        handleEmailChange={this.handleEmailChange}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        submitForm={e => this.Register(e)}/>
      </Layout>
      </div>
    );
  }
}
export default Home;
