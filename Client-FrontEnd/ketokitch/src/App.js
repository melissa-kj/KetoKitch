import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';



export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: {}
    }
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
            exact
            path={"/"}
            render={props => (
              <Home {...props} loggedIn={this.state.loggedIn} />
            )}
             />
            <Route path={"/dashboard"} component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}
