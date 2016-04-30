import React, { Component, ListView, PropTypes, Text, TouchableHighlight, TouchableOpacity, View, Image, } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles'
import { MKButton, MKColor, MKIconToggle,  getTheme,} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {
//   getDeviceScreen,
//   getHistoryScreen,
//   getGraphScreen,
// } from '../routes'
const theme = getTheme();

export default class Quotes extends Component {

  render() {
    return (
      <View >
        <View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Image style={styles.circle} source={require('../../img/user2.jpeg')}/>
            </View>
            <Text style={{ fontSize: 20,fontWeight: '600',color: 'rgb(30, 30, 30)',position:'absolute', top:5,right:10}}>16:40</Text>
            <Text style={{ fontSize: 12,fontWeight: '400',color: 'rgb(90, 88, 88)',position:'absolute', bottom:10}}>Project / Armando Mendivil</Text>
            <View style={styles.col}>
              <Text style={{marginTop:20, fontSize: 20,fontWeight: '600',color: 'rgb(30, 30, 30)'}}>Activity...</Text>
            </View>
          </View>
          <View style={styles.li}></View>
        </View>
        <View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Image style={styles.circle} source={require('../../img/user2.jpeg')}/>
            </View>
            <Text style={{ fontSize: 20,fontWeight: '600',color: 'rgb(90, 88, 88)',position:'absolute', top:10,right:10}}>16:40</Text>
            <Text style={{marginTop:15, fontSize: 12,fontWeight: '400',color: 'rgb(90, 88, 88)',position:'absolute', bottom:10}}>Project / Armando Mendivil</Text>
            <View style={styles.col}>
              <Text style={{marginTop:25, fontSize: 20,fontWeight: '600',color: 'rgb(30, 30, 30)'}}>Activity...</Text>
            </View>
          </View>
          <View style={styles.li}></View>
        </View>
      </View>
    )
  }

  // If we don't have any systems data,
  // and to render the first system otherwise.
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading systems ...
        </Text>
      </View>
    );
  }
}
