import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/banner.png';

const Styles = styled.div `

.jumbo {
  background: url(${banner}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 600px;
  position: relative;
  z-index: -2;
}

.overlay {
  background-color: black;
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

`;

export const Jumbotron = () => (

  <Styles>
  <Jumbo fluid className = "jumbo">
    <div className = "overlay"> </div>
    <Container>

    </Container>
  </Jumbo>
  </Styles>
)
