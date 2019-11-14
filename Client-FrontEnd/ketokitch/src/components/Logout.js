import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Login from './Login';
import Layout from './Layout';



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

// this.state=loggedIn: true
// then change state to loggedIn:false

class Logout extends Component {
  render() {
    return (

    <div >
      <Layout>
        <h1> Come back soon! </h1>
        <Button variant="warning"><Link to="/">Return to Login</Link></Button>
      </Layout>
    </div>
    )
  }
}
export default Logout;
