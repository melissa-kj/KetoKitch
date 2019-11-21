import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Browse from './components/Browse';
import Logout from './components/Logout';
import Footer from './components/Footer';




 class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/browse" component={Browse} />
            <Route path="/logout" component={Logout} />
            // <Route path="/dashboard" component={Dashboard} />
            // <Route path="/dashboard" component={Dashboard} />
            // <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      <Footer />
      </div>
    );
  }
}
export default App;
