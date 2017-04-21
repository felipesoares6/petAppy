import React from 'react'
import { Component } from 'React'

import { StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

const MK = require('react-native-material-kit')

const { MKTextField } = MK

const styles = StyleSheet.create({
  TextField: {
    width: 280,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
})

export default class TextField extends Component {
    render () {
      const styleTextField = this.props.styleTextField || styles.TextField

      const TextFieldMK = MKTextField.textfield()
        .withStyle(styleTextField)
        .withPlaceholder(this.props.placeHolder)
        .build()

      return (
        <TextFieldMK />
      )
    }
  }

TextField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  styleTextField: PropTypes.object,
}
