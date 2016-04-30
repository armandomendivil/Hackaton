import React, {
  AppRegistry,
  Component,

} from 'react-native';

import App from './app';

class RN extends Component {
  render() {
    return ( <App/>);
  }
}

AppRegistry.registerComponent('RN', () => RN);
