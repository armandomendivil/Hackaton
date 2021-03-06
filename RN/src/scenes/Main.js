import React, { AsyncStorage, Component, PropTypes, Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import Login from './Login'
import Logout from './Logout'
import NavigationBar from 'react-native-navbar';
import Quotes from '../components/Quotes'
//import styles from '../components/Styles'
import { loginUser, logoutUser, validateAuth, fetchSecretQuote } from '../actions'
import ddpClient from '../components/ddp'
import LoggedOut from '../components/loggedOut'
import LoggedIn from '../components/loggedIn'

export default class Main extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      connected: false,
      signedIn: false
    }
  }

  componentDidMount() {

   ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({ connected: connected });
    });

  }

  changedSignedIn(status = false) {
    this.setState({signedIn: status});
  }

  render() {
    let body;
    
    if (this.state.connected && this.state.signedIn) {
      body = <LoggedIn changedSignedIn={this.changedSignedIn} />; // Note the change here as well
    } else if (this.state.connected) {
      body = <LoggedOut changedSignedIn={this.changedSignedIn} />;
    }

     return (
      <View style={styles.container}>
        <View style={styles.center}>
          {body}
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  center: {
    alignItems: 'center'
  }
});
