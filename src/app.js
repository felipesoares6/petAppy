import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Login from './components/Login'
import EnterLogin from './components/EnterLogin'
import Home from './components/Home'
import CardSelect from './components/CardSelect'

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
                component={EnterLogin} />
              <Scene key="Home"
                component={Home}
                title="Home"
                hideNavBar={false} />
              <Scene key="CardSelect"
                component={CardSelect}
                title="Tipo do anúncio" />
          </Scene>
      </Router>
    )
  }
}
