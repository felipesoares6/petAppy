import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {
  Item,
  Label,
  Input,
  Form,
  Button,
 } from 'native-base'
 import {
    primaryColor,
    textPrimaryColor,
    secondaryLightColor,
 } from '../styles/colors'

const styles = StyleSheet.create({
  textFieldContainer: {
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: textPrimaryColor,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginTop: 50,
    marginBottom: 30,
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

const textFieldContainer = StyleSheet.flatten(styles.textFieldContainer)
const buttonLogin = StyleSheet.flatten(styles.buttonLogin)
const buttonCancel = StyleSheet.flatten(styles.buttonCancel)

class LoginForm extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    const values = {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    }

    this.props.handleSubmit(values)
  }

  render () {
    return (
        <Form style={textFieldContainer}
          onSubmit={this.handleSubmit}>
          <Item floatingLabel
            last>
              <Label>Nome</Label>
              <Input name='name'
                ref={(node) => this.name = node } />
          </Item>
          <Item floatingLabel
            last>
              <Label>Email</Label>
              <Input name='email'
                ref={(node) => this.email = node } />
          </Item>
          <Item floatingLabel
            last>
              <Label>Senha</Label>
              <Input name='password'
                ref={(node) => this.password = node } />
          </Item>
          <Item floatingLabel
            last>
              <Label>Confirmar Senha</Label>
              <Input name='passwordConfirm'
                ref={(node) => this.passwordConfirm = node } />
          </Item>

          <View style={styles.buttonContainer}>
            <Button
              full
              style={buttonLogin}
            >
                <Text
                  style={styles.buttonText}>
                  Criar
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
        </Form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm
