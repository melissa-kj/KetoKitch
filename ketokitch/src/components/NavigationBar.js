import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #333;
  }

  .navbar-brand, .navbar-nav, .nav-link {
    color: white;

    &:hover {
      color: hotpink;
    }
  }

`;

export const NavigationBar = (props) => (

  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">The Keto Kitch</Navbar.Brand>
      <Navbar.Toggle area-controls="basic-nav-bar" />
      <Navbar.Collapse id="basic-nav-bar">
        <Nav className = "ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/profile">Your Profile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/browse">Browse</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>

)
