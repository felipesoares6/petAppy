import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Login from './components/Login'

export default class petAppy extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="login"
                component={Login}
                inital={true}
                hideNavBar />
          </Scene>
      </Router>
    )
  }
}
