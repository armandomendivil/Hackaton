import React, {
  View,
  StyleSheet
} from 'react-native';

import ddpClient from './ddp';
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';

export default React.createClass({
  getInitialState() {
    return {
      connected: false,
      signedIn: false
    }
  },

  componentDidMount() {
    ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({ connected: connected });
    });
  },

  changedSignedIn(status = false) {
    this.setState({signedIn: status});
  },

  render() {
    let body;
    if (this.state.connected && this.state.signedIn) {
      body = <LoggedIn changedSignedIn={this.changedSignedIn} />; // Note the change here as well
    } else if (this.state.connected) {
      body = <LoggedOut changedSignedIn={this.changedSignedIn} />;
    }

    return (
      <View style={{flex: 1,alignItems: 'stretch',}}>
          {body}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
