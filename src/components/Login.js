import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

const images = {
  logo: require('../assets/petappy.png')
}

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo} alt="logo petAppy"></Image>
        <Text>
          PetAppy
        </Text>
        <Button title="Entrar"> Entrar </Button>
        <Button title="Criar Conta"> Criar Conta </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
