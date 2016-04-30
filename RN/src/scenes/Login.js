import React, { Component, PropTypes, Text, StyleSheet, View, Image } from 'react-native'
import { MKTextField, MKButton,  MKColor,  mdl, } from 'react-native-material-kit';
import styles from '../components/Styles';

// Input username
const UsernameInput = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withTintColor(MKColor.Blue)
  .withTextInputStyle({color: MKColor.Blue})
  .withHighlightColor(MKColor.Blue)
  .withFloatingLabelFont({
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '200',
    color: MKColor.Blue
  })
  .build();

  // Input password
  const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
    .withPassword(true)
    .withPlaceholder('Password')
    .withStyle(styles.textfieldWithFloatingLabel)
    .withTintColor(MKColor.Blue)
    .withTextInputStyle({color: MKColor.Blue})
    .withHighlightColor(MKColor.Blue)
    .withFloatingLabelFont({
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight: '200',
      color:MKColor.Blue
    })
    .build();

  const ColoredRaisedButton = MKButton.coloredButton()
    .withText('Login')
    .withBackgroundColor(MKColor.Teal)
    .build();

export default class Login extends Component {

  render() {

    return (
      <View >
            <UsernameInput ref="username" withOnChangeText={(event) => this.setState({username: event})}/>
            <PasswordInput ref="password" withOnChangeText={(event) => this.setState({password: event})}/>
      </View>
    )
  }

  handleClick(event) {
    //const creds = { username: this.refs.username.bufferedValue, password: this.refs.password.bufferedValue }
    const creds = { username: 'philipk', password: 'sandiego' }
    this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}
