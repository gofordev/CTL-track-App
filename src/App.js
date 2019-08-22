import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Reset from './components/Reset/Reset'
import Map from './pages/Map'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: true,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/reset' component={Reset} />
          <PrivateRoute authed={this.state.authed} path='/map' component={Map} />
        </div>
      </Router>
    );
  }
}

export default App;
