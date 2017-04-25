import React from 'react'
import { Component } from 'React'

import { StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const MK = require('react-native-material-kit')

const { MKButton } = MK

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
})

export default class Button extends Component {
    render () {
      const buttonStyle = this.props.buttonStyle || styles.button

      const ColoredButton = MKButton.coloredButton()
        .withStyle(buttonStyle)
        .withBackgroundColor(this.props.bgColor)
        .withOnPress(this.props.onPress)
        .build()

      return (
        <ColoredButton>
          {this.props.children}
        </ColoredButton>
      )
    }
  }

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func,
}
