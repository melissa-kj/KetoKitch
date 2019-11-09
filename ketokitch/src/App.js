import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
      <Switch>
      <Route exact path = "/" component = { Home } />
      <Route path = "/profile" component = { Profile } />
      <Route path = "/recipe" component = { Recipe } />
      <Route component = { NoMatch } />


      </Switch>

      </Router>

      </React.Fragment>
    )
  }
}

export default App;
