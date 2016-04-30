import React, { AsyncStorage, Component, PropTypes, Text, View,TouchableOpacity } from 'react-native'
import Login from './Login'
import Logout from './Logout'
import NavigationBar from 'react-native-navbar';
import Quotes from '../components/Quotes'
import styles from '../components/Styles'
import { loginUser, logoutUser } from '../actions'


export default class Main extends Component {
  render() {
      const { dispatch } = this.props
      // return( <Login
      //           onLoginClick={ (creds) => dispatch(loginUser(creds)) }
      //           dispatch={dispatch}
      //           navigator={this.props.navigator}
      //         />
      // )
      return ( <Quotes
                dispatch={dispatch}
                navigator={this.props.navigator}
              />
      )
    }
}
