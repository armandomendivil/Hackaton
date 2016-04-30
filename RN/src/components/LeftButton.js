import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles'
import {
  getDeviceScreen,
  getHistoryScreen,
  getGraphScreen,
} from '../routes'

export default class LeftButton extends Component {
  static propTypes = {
    openDrawer: PropTypes.func.isRequired,
  };
  render() {
    let {openDrawer} = this.props
    const { onLogoutClick } = this.props
    const {route} = this.props
    switch (route.name) {
      case 'Main':
        return( <View style={styles.leftButton}>
                </View>);
        break;
      case 'MonitorPanel':
        return( <View style={styles.leftButton}>
                  <Icon name="bars" size={25} color="#fff" iconStyle={{paddingLeft:20}} onPress={openDrawer} />
                </View>);
        break;

    }
  }
}
