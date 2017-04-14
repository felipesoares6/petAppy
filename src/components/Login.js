import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

const theme = {
  primaryColor: '#f79b2e',
  secondaryColor: '#49638e',
  primaryLightColor: '#ffa55b',
  secondaryLightColor: '#74a7ff',
  tertiaryColor: '#f25454'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const images = {
  logo: require('../assets/petappy.png'),
}

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={images.logo}
          alt="logo petAppy" />
        <Text>
          PetAppy
        </Text>
      </View>
    )
  }
}
