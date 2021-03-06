import React, {
  ListView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Button from './button';
var _ = require('lodash');
import ddpClient from './ddp';

if (typeof process === 'undefined') process = {};
process.nextTick = setImmediate;

export default React.createClass({
    getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => !_.isEqual(row1, row2),
      }),
      loaded: false,
    };
  },

  componentDidMount() {
    this.makeSubscription();
    this.observePosts();
  },

  updateRows: function(rows) {
    this.setState({
     dataSource: this.state.dataSource.cloneWithRows(rows),
     loaded: true,
   });
  },

  observePosts() {
    let observer = ddpClient.observe("employees");

    console.log(_.cloneDeep(_.values(ddpClient.collections.employees)))

    observer.added = (id) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.employees)));
    observer.changed = (id, oldFields, clearedFields, newFields) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.employees)));
    observer.removed = (id, oldValue) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.employees)));
  },

  makeSubscription() {
    ddpClient.subscribe("employees", [], (results) => {
      debugger
      this.setState({posts: ddpClient.collections.employees});
      this.setState({test: _.cloneDeep(_.values(ddpClient.collections.employees))});
    });
  },
  // Add Activity
  addActivity() {
    console.log('ADD ACTIVITY')
    ddpClient.call('addPost', [this.state.text]);
  },

  handleSignOut() {
    ddpClient.logout(() => {
      this.props.changedSignedIn(false)
    });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={{flex: 1,alignItems: 'stretch',}}>
      <NavigationBar
        title={{
          title: '',
        }}
        tintColor={'#3CB878'}
        rightButton={<View style={{paddingRight:10,paddingTop:10,}}>
          <TouchableOpacity>
            <Text style={{color:'#fff', fontSize: 20}}>SignIn</Text>
          </TouchableOpacity>
        </View>}
        />
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFriend}
        style={styles.listView}
      />
      </View>


    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading lists...
        </Text>
      </View>
    );
  },

  renderFriend: function(emp) {
    return (
      <TouchableOpacity>
      <View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Image style={styles.circle} source={{uri: emp.img}}/>
          </View>
          <Text style={{ fontSize: 12,fontWeight: '600',color: 'rgb(30, 30, 30)',position:'absolute', top:5,right:10}}>{emp.createdAt.toLocaleTimeString()}</Text>
          <Text style={{ fontSize: 12,fontWeight: '400',color: 'rgb(90, 88, 88)',position:'absolute', bottom:10}}> {emp.project} / {emp.name}</Text>
          <View style={styles.col}>
            <Text style={{marginTop:20, fontSize: 20,fontWeight: '600',color: 'rgb(30, 30, 30)'}}>{emp.title}</Text>
          </View>
        </View>
        <View style={styles.li}></View>
      </View>
      </TouchableOpacity>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  firstName: {
    flex: 5,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft:15,
  },
  lastName: {
    flex: 5,
    fontSize: 18,
  },
  listView: {
    backgroundColor: 'white',
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
