import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { Button } from 'native-base'
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
  buttonLost: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: tertiaryColor,
  },
  buttonFound: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: secondaryColor,
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
    paddingLeft: 30,
    paddingRight: 30,
  },
})

const container = StyleSheet.flatten(styles.container)
const buttonLost = StyleSheet.flatten(styles.buttonLost)
const buttonFound = StyleSheet.flatten(styles.buttonFound)

export default class CardSelect extends Component {
  render () {
    return (
      <View style={container}>

        <Text style={styles.text}> O que aconteceu? </Text>

        <Button
          full
          style={buttonLost}>
          <Text style={styles.buttonText}> Perdi um animal </Text>
        </Button>

        <Button
          full
          style={buttonFound}>
          <Text style={styles.buttonText}> Encontrei um animal </Text>
        </Button>
      </View>
    )
  }
}
