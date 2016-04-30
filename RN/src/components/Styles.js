import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textfieldWithFloatingLabel: {
    height: Platform.OS === 'android' ? 0 : 48,  // have to do it on iOS
    marginTop: 10,
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    margin:10,
  },
  li: {
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
  },
  col: {
    flex: 0,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
