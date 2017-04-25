import React, { Component } from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

import PropTypes from 'prop-types'

import backgroundColor from '../styles/colors'

const styles = StyleSheet.create({
  flexContainer: {
    width: null,
    height: null,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    paddingTop: 30,
  },
})

export default class FlexContainer extends Component {
  render () {
    const styleContainer = this.props.containerStyle || styles.flexContainer

    return (
      <View style={styleContainer}>
        {this.props.children}
      </View>
    )
  }
}

FlexContainer.propTypes = {
  children: PropTypes.element.isRequired,
  containerStyle: PropTypes.object,
}
