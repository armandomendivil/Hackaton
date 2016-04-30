/**
 * Hackaton React Native
 * https://github.com/armandomendivil/Hackaton
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import styles from './src/components/Styles'

import App from './src/containers/App'
import api from './src/middleware/api'
import hackatonApp from './src/reducers'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(hackatonApp)

class RN extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RN', () => RN);
