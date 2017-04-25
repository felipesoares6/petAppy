import React, { Component } from 'react'

import Button from './Button'
import FlexContainer from './FlexContainer'

import {
  Text,
  StyleSheet,
} from 'react-native'

import {
  textPrimaryColor,
  secondaryColor,
  tertiaryColor,
  backgroundColor,
  textSecondaryColor,
} from '../styles/colors'

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    marginBottom: 30,
    color: textSecondaryColor,
  },
  button: {
    width: 300,
    height: 70,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: textPrimaryColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    width: null,
    height: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    paddingTop: 30,
  },
})

const container = StyleSheet.flatten(styles.container)
const button = StyleSheet.flatten(styles.button)

export default class CardSelect extends Component {
  render () {
    return (
      <FlexContainer containerStyle={container}>

        <Text style={styles.text}> O que aconteceu? </Text>

        <Button bgColor={tertiaryColor}
          buttonStyle={button}>
          <Text style={styles.buttonText}> Perdi um animal </Text>
        </Button>

        <Button bgColor={secondaryColor}
          buttonStyle={button}>
          <Text style={styles.buttonText}> Encontrei um animal </Text>
        </Button>
      </FlexContainer>
    )
  }
}
