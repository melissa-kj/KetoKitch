import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';


class Browse extends Component {
  render() {
    return (
      <div>
      <NavigationBar />
          <h2> Browse Recipes </h2>

      </div>
    );
  }
}
export default Browse;
