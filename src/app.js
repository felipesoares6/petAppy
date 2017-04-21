import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Login from './components/Login'
import EnterLogin from './components/EnterLogin'

export default class petAppy extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="login"
                component={Login}
                inital={true}
                hideNavBar />
              <Scene key="EnterLogin"
                component={EnterLogin}
                title="Login" />
          </Scene>
      </Router>
    )
  }
}
