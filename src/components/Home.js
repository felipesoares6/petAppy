import React, { Component } from 'react'

import { Actions } from 'react-native-router-flux'

import Button from './Button'
import FlexContainer from './FlexContainer'

import {
  Text,
  StyleSheet,
} from 'react-native'

import {
  textPrimaryColor,
  tertiaryColor,
} from '../styles/colors'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  buttonText: {
    color: textPrimaryColor,
    fontSize: 38,
    fontWeight: 'bold',
  },
})

const button = StyleSheet.flatten(styles.button)

export default class Home extends Component {
  render () {
    return (
      <FlexContainer>

        <Button bgColor={tertiaryColor}
          buttonStyle={button}
          onPress={Actions.CardSelect}>
          <Text style={styles.buttonText}> + </Text>
        </Button>
      </FlexContainer>
    )
  }
}
