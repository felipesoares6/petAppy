import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'
import { Button } from 'native-base'
import { primaryFont } from '../styles/fonts'
import {
  primaryColor,
  secondaryColor,
  halfOpacityColor,
  textPrimaryColor,
} from '../styles/colors'

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
   paddingTop: 30,
 },
 imageIcon: {
   width: 130,
   height: 150,
   marginTop: 50,
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
   alignSelf: 'stretch',
   marginLeft: 30,
   marginRight: 30,
   marginBottom: 30,
 },
 buttonLogin: {
   backgroundColor: primaryColor,
   marginBottom: 10,
 },
 buttonCreateAccount: {
   backgroundColor: secondaryColor,
   marginTop: 10,
 },
})

const buttonLogin = StyleSheet.flatten(styles.buttonLogin)
const buttonCreateAccount = StyleSheet.flatten(styles.buttonCreateAccount)

const images = {
  background: require('../assets/bg-img.png'),
  logo: require('../assets/petappy.png'),
}

export default class Login extends Component {
  render () {
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

            <Button
              full
              style={buttonLogin}
              onPress={Actions.EnterLogin}>
              <Text
                style={styles.buttonText}>
                Entrar
              </Text>
            </Button>

            <Button
              full
              style={buttonCreateAccount}>
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
