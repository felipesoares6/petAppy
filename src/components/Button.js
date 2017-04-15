import React from 'react'
import { Component } from 'React'

import { StyleSheet } from 'react-native'

const MK = require('react-native-material-kit')

const {
  MKButton,
} = MK

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
})

export default class Button extends Component {
    render () {
      const ButtonCB = MKButton.coloredButton()
        .withStyle(styles.button)
        .withBackgroundColor(this.props.styleButton)
        .build()

      return (
        <ButtonCB>
          {this.props.children}
        </ButtonCB>
      )
    }
  }
