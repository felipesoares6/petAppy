import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'
import {
  Button,
  Item,
  Label,
  Input,
  Form,
 } from 'native-base'
import {
   primaryColor,
   textPrimaryColor,
   textSecondaryColor,
   secondaryLightColor,
   backgroundColor,
} from '../styles/colors'
import { primaryFont } from '../styles/fonts'

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
 imageIcon: {
   marginTop: 30,
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
   alignSelf: 'stretch',
   marginBottom: 30,
   marginLeft: 30,
   marginRight: 30,
 },
 buttonContainer: {
   alignSelf: 'stretch',
   marginBottom: 30,
   marginLeft: 30,
   marginRight: 30,
 },
 buttonLogin: {
   backgroundColor: primaryColor,
   marginBottom: 10,
 },
 buttonCancel: {
   backgroundColor: secondaryLightColor,
   marginTop: 10,
 },
})

const buttonLogin = StyleSheet.flatten(styles.buttonLogin)
const buttonCancel = StyleSheet.flatten(styles.buttonCancel)
const textFieldContainer = StyleSheet.flatten(styles.textFieldContainer)

const images = {
  logo: require('../assets/petappy.png'),
}

export default class EnterLogin extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={images.logo}
          alt="logo petAppy"
          style={styles.imageIcon} />

        <Text style={styles.title}>
           Acessar
        </Text>

        <Form style={textFieldContainer}>
          <Item floatingLabel
            last>
              <Label>Email</Label>
              <Input />
          </Item>
          <Item floatingLabel
            last>
              <Label>Senha</Label>
              <Input />
          </Item>
        </Form>

        <View style={styles.buttonContainer}>

          <Button
            full
            style={buttonLogin}
            onPress={Actions.Home}>
            <Text
              style={styles.buttonText}>
              Entrar
            </Text>
          </Button>

          <Button
            full
            style={buttonCancel}
            onPress={Actions.pop}>
            <Text
              style={styles.buttonText}>
              Cancelar
            </Text>
          </Button>
        </View>
      </View>
    )
  }
}
