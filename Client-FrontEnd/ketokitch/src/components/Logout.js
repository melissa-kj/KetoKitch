import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Login from './Login';
import styled from 'styled-components';
import banner from '../banner.png';

const Styles = styled.div `

.splash {
  background: url(${banner}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 600px;
  position: relative;
  z-index: -2;
}
`;

//Button redirect to login

//button redirect to signup

class Logout extends Component {
  render() {
    return (
  <Styles>
    <div className="splash">
      <Container>
        <h1> Come back soon! </h1>
        <Button variant="outline-light">Return to Login</Button>
      </Container>
    </div>
  </Styles>
)
}
}
export default Logout;
