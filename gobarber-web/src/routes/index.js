import React from 'react'
import { Router, Switch } from 'react-router-dom'

import history from 'services/history'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'

import Route from './Route'

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} isPrivate />
        <Route path='/profile' component={Profile} isPrivate />
      </Switch>
    </Router>
  )
}

export default Routes
