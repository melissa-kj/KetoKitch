import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Custom Components

import { Home } from './Home'
import { Profile } from './Profile'
import { Recipe } from './Recipe'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavigationBar />
          <Jumbotron />
            <Layout>
              <Router>
                <Switch>
                  <Route exact path = "/" component = { Home } />
                  <Route path = "/profile" component = { Profile } />
                  <Route path = "/browse" component = { Browse } />
                  <Route path = "/logout" component = { Logout } />
                  <Route component = { NoMatch } />
                </Switch>
              </Router>
            </Layout>
        </React.Fragment>
    )
  }
}

export default App;
