import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Login = () => (
  <Form>
    <Form.Group controlId="loginUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter username" />
      <Form.Text className="text-muted">

      </Form.Text>
    </Form.Group>

    <Form.Group controlId="loginPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
</Form>
)
