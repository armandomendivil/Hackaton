import React, {
  Component,
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  getLayoutScreen,
  getLoginScreen,
  getLogoutScreen
} from '../routes'
export default class Main extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired,
  };

  render() {
    const { onLogoutClick } = this.props
    let {closeDrawer} = this.props
    return (
      <View style={{paddingTop:10}}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigator.push(getLayoutScreen())}>
          <Text>Main</Text>
        </TouchableOpacity>
        <View style={styles.li}></View>
        <TouchableOpacity style={styles.button} onPress={onLogoutClick}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  controlText: {
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
  },
  li: {
  borderBottomColor: '#c8c7cc',
  borderBottomWidth: 0.5,
  paddingTop: 15,
  paddingBottom: 15,
},
})
