import React from 'react'
import { Component } from 'React'

import { StyleSheet } from 'react-native'

const MK = require('react-native-material-kit')

const { MKButton } = MK

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
      const styleButton = this.props.styleButton || styles.button

      const ColoredButton = MKButton.coloredButton()
        .withStyle(styleButton)
        .withBackgroundColor(this.props.bgColor)
        .build()

      return (
        <ColoredButton>
          {this.props.children}
        </ColoredButton>
      )
    }
  }
