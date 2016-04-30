// components/Logout.js

import React, { Component, PropTypes, Text, TouchableHighlight } from 'react-native'
import styles from '../components/Styles'

export default class Logout extends Component {

  render() {
    const { onLogoutClick, errorMessage } = this.props

    return (
      <TouchableHighlight style={styles.button} onPress={() => onLogoutClick()}>
        <Text>Logout</Text>
      </TouchableHighlight>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}
