import React from 'react';
// import Home from './components/Home';


const Login = (props) => {
    return (
      <div>
        <h3> Login </h3>
        <form onSubmit={e => props.submitForm(e)}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={props.username}
              onChange={props.handleUsernameChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={props.password}
              onChange={props.handlePasswordChange}
              required
            />

            <input className="submit" type="submit" value="Login"/>

        </form>
      </div>
    );
  }
export default Login;


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
