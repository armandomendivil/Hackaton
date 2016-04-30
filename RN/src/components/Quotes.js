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

  constructor (props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
     this.socket = io('http://192.168.1.70:3464', {jsonp: false});
  }
  _renderRow (rowData) {
    var action = (<Text> VIEW SYSTEM</Text>);
    return (
      <View style={styles.containerSystems}>
      </View>
    )
  }

  componentDidMount() {
    this.props.onSecretQuoteClick('system/getEventSummary')
  }

  render() {
    const { onSecretQuoteClick, isAuthenticated, quote, isSecretQuote } = this.props
    const dataSource = this.dataSource.cloneWithRows(this.props.quote);
    if (!this.props.isSecretQuote) {
      return this.renderLoadingView();
    }


    return (<ListView style={styles.listView}
              dataSource={dataSource}
              renderRow={(rowData) => this._renderRow(rowData)}
            />
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

Quotes.propTypes = {
  onSecretQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSecretQuote: PropTypes.bool.isRequired
 }
