import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'
import LoginForm from '../components/LoginForm'
import {
   textSecondaryColor,
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
   marginTop: 20,
   width: 75,
   height: 90,
 },
 title: {
   fontFamily: primaryFont,
   fontSize: 32,
   color: textSecondaryColor,
   marginTop: 40,
 },
})

const images = {
  logo: require('../assets/petappy.png'),
}

export default class EnterLogin extends Component {

  handleSubmit (values) {
    console.log(values)
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={images.logo}
          alt="logo petAppy"
          style={styles.imageIcon} />

        <Text style={styles.title}>
           Criar Conta
        </Text>

        <LoginForm handleSubmit={this.handleSubmit} />
      </View>
    )
  }
}
