import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { Button } from 'native-base'
import {
  textPrimaryColor,
  tertiaryColor,
  backgroundColor,
} from '../styles/colors'

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    paddingTop: 30,
  },
  button: {
    backgroundColor: tertiaryColor,
  },
  buttonText: {
    color: textPrimaryColor,
    fontSize: 28,
    fontWeight: 'bold',
  },
})

const button = StyleSheet.flatten(styles.button)

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>

        <Button style={button}
          onPress={Actions.CardSelect}>
          <Text style={styles.buttonText}> Adicionar </Text>
        </Button>
      </View>
    )
  }
}
