import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Custom Components
import { Landing } from './components/Landing'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { Browse } from './components/Browse'
import { NoMatch } from './components/NoMatch'
import { Logout } from './components/Logout'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <Landing />
          <NavigationBar />
          <Jumbotron />
            <Layout>
              <Router>
                <Switch>
                  <Route exact path = "/home" component = { Home } />
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
