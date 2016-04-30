import React, { AsyncStorage, Component, PropTypes, Text, View,TouchableOpacity } from 'react-native'
import Login from './Login'
import Logout from './Logout'
import NavigationBar from 'react-native-navbar';
import Quotes from '../components/Quotes'
import styles from '../components/Styles'
import { loginUser, logoutUser, validateAuth, fetchSecretQuote } from '../actions'

let createHandler = function(dispatch) {
  var user = {};
  AsyncStorage.getItem('id_token').then(token => {
    if (token !== null) {
      user.id_token = token;
      dispatch(validateAuth(user))
    }
  });
}

export default class Main extends Component {
  constructor (props, context) {
    super(props)
    this.handlers = createHandler(this.props.dispatch)
  }

  componentDidMount() {
    this.handlers;
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage, quote, isSecretQuote } = this.props

    if(!isAuthenticated){
      return( <Login
                errroMessage={errorMessage}
                onLoginClick={ (creds) => dispatch(loginUser(creds)) }
              />
      )}
    if(isAuthenticated){
      return ( <Quotes
                onSecretQuoteClick={(endpoint, id) => dispatch(fetchSecretQuote(endpoint, id))}
                isAuthenticated={isAuthenticated}
                quote={quote}
                dispatch={dispatch}
                isSecretQuote={isSecretQuote}
                navigator={this.props.navigator}
              />
      )}
    }
}

Main.propTypes = {
  onSecretQuoteClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}
