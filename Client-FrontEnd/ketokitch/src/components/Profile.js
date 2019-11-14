import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Layout from './Layout';
import NavigationBar from './NavigationBar';


class Profile extends Component {
  constructor(props){
  super(props);
  this.state = {
    user: [],
    userLoaded: false
  }
}
showUserProfile = (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/user", {
    method: 'GET',
    headers: {
      'Authorization':'Bearer ' + localStorage.getItem('user'),
      'Content-Type':'application/json'
    }
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
    this.setState({
      user: res,
      userLoaded: true,
    })
  })
}
  render() {
    return (
      <div>
        <NavigationBar />
          <Layout>
            <h4> Your Profile </h4>
          </Layout>
      </div>
    )
  }
}
export default Profile;

//
//
//         <h3>UPLOAD A RECIPE</h3>
//         <div>
//         <form onSubmit={props.submitForm}>
//
//   <label htmlFor="author">Author:
//   <input
//     type="text"
//     placeholder="author"
//     label="author"
//     id="author"
//     value={props.author}
//     onChange={props.handleAuthorChange}
//   />
//   </label>
//
//   <label htmlFor="title"> Title:
//   <input
//     type="text"
//     placeholder="title"
//     label="title"
//     id="title"
//     value={props.title}
//     onChange={props.handleTitleChange}
//   /></label>
//   <input type="submit" value="create"/>
// </form>
// </div>
