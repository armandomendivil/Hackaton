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

export default class RightButton extends Component {
  render() {
    let {openDrawer} = this.props
    const { onLogoutClick } = this.props
    const {route} = this.props
    return (
      <View>
       <View>{route.name == 'Main' &&
         <View style={{paddingRight:10,paddingTop:10,}}>
           <TouchableOpacity onPress={() => alert('hello!')}>
             <Text style={{color:'#fff', fontSize: 20}}>SignIn</Text>
           </TouchableOpacity>
         </View>}
       </View>
       <View>{route.name == 'Device' &&
         <View style={{paddingRight:10,}}>
           <View style={styles.row}>
             <View style={styles.col}>
                <Icon name="history" size={25} color="#fff" onPress={() => {this.props.navigator.push(getHistoryScreen())}} />
              </View>
              <View style={styles.col}>
                <Icon name="line-chart" size={25} color="#fff" onPress={() => {this.props.navigator.push(getGraphScreen())}} />
              </View>
            </View>
          </View>}
        </View>
     </View>
    );
  }
}
