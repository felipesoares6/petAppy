import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

import { Actions } from 'react-native-router-flux'

import {
   primaryColor,
   textPrimaryColor,
   textSecondaryColor,
   secondaryLightColor,
} from '../styles/colors'

import { primaryFont } from '../styles/fonts'

import Button from './Button'
import TextField from './TextField'
import FlexContainer from './FlexContainer'

const styles = StyleSheet.create({
 imageIcon: {
   width: 110,
   height: 130,
 },
 title: {
   fontFamily: primaryFont,
   fontSize: 42,
   color: textSecondaryColor,
   marginTop: 20,
 },
 buttonText: {
   fontSize: 18,
   fontWeight: 'bold',
   color: textPrimaryColor,
 },
 textFieldContainer: {
   marginTop: 40,
   marginBottom: 30,
 },
 buttonContainer: {
   marginBottom: 30,
 },
})

const images = {
  logo: require('../assets/petappy.png'),
}

export default class EnterLogin extends Component {
  render() {
    return (
      <FlexContainer>

        <Image
          source={images.logo}
          alt="logo petAppy"
          style={styles.imageIcon} />

        <Text style={styles.title}>
           Acessar
        </Text>

        <View style={styles.textFieldContainer}>

          <TextField placeHolder='Email' />

          <TextField placeHolder='Senha' />
        </View>

        <View style={styles.buttonContainer}>

          <Button bgColor={primaryColor}
            onPress={Actions.Home}>
            <Text
              style={styles.buttonText}>
              Entrar
            </Text>
          </Button>

          <Button bgColor={secondaryLightColor}
            onPress={Actions.pop}>
            <Text
              style={styles.buttonText}>
              Cancelar
            </Text>
          </Button>
        </View>
      </FlexContainer>
    )
  }
}
