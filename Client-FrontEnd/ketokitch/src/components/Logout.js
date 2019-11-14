import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Login from './Login';



// const Styles = styled.div `
//
// .splash {
//   background: url(${banner}) no-repeat fixed bottom;
//   background-size: cover;
//   color: #efefef;
//   height: 600px;
//   position: relative;
//   z-index: -2;
// }
// `;

//Button redirect to login

//button redirect to signup

class Logout extends Component {
  render() {
    return (

    <div >
      <Container>
        <h1> Come back soon! </h1>
        <Button><Link to="/">Return to Login</Link></Button>
      </Container>
    </div>
)
}
}
export default Logout;
