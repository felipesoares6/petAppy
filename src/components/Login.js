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
   secondaryColor,
   halfOpacityColor,
   textPrimaryColor,
} from '../styles/colors'

import { primaryFont } from '../styles/fonts'

import Button from './Button'

const styles = StyleSheet.create({
 background: {
   width: null,
   height: null,
   flex: 1,
   alignItems: 'stretch',
   resizeMode: 'cover',
 },
 container: {
   width: null,
   height: null,
   flex: 1,
   flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems: 'center',
   backgroundColor: halfOpacityColor,
   paddingTop: 50,
 },
 imageIcon: {
   width: 130,
   height: 150,
 },
 title: {
   fontFamily: primaryFont,
   fontSize: 56,
   color: textPrimaryColor,
 },
 buttonText: {
   fontSize: 18,
   fontWeight: 'bold',
   color: textPrimaryColor,
 },
 buttonContainer: {
   marginBottom: 30,
 },
})

const images = {
  background: require('../assets/bg-img.png'),
  logo: require('../assets/petappy.png'),
}

export default class Login extends Component {
  render() {
    return (
      <Image source={images.background}
        style={styles.background}>

        <View style={styles.container}>

          <Image
            source={images.logo}
            alt="logo petAppy"
            style={styles.imageIcon} />

          <Text style={styles.title}>
             PetAppy
          </Text>

          <View style={styles.buttonContainer}>

            <Button bgColor={primaryColor}
              onPress={Actions.EnterLogin}>
              <Text
                style={styles.buttonText}>
                Entrar
              </Text>
            </Button>

            <Button bgColor={secondaryColor}>
              <Text
                style={styles.buttonText}>
                Criar conta
              </Text>
            </Button>
          </View>
        </View>
      </Image>
    )
  }
}
