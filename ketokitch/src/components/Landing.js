import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Login from './Login';
import styled from 'styled-components';
import banner from '../assets/banner.png';

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



export const Landing = () => (
  <Styles>
    <div className="splash">
      <Container>
        <Button variant="outline-light">Login</Button>
        <Button variant="outline-light">Sign up!</Button>
      </Container
    </div>
  </Styles>
)
