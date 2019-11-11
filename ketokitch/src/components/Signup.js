import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Signup = () => (
  <Form>
  <Form.Group controlId="signupEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>
    <Form.Group controlId="signupUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter username" />
      <Form.Text className="text-muted">

      </Form.Text>
    </Form.Group>

    <Form.Group controlId="signupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
</Form>
)
