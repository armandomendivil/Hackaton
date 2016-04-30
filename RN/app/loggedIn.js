import React, {
  ListView,
  Text,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

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
    let observer = ddpClient.observe("posts");
    // observer.added = (id) => {
    //   console.log(ddpClient.collections.posts)
    //   this.setState({posts: ddpClient.collections.posts})
    //   this.setState({test: ddpClient.collections.posts[id]});
    // }
    // observer.changed = (id, oldFields, clearedFields, newFields) => {
    //   this.setState({posts: ddpClient.collections.posts})
    // }
    // observer.removed = (id, oldValue) => {
    //   this.setState({posts: ddpClient.collections.posts})
    // }

    observer.added = (id) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.posts)));
    observer.changed = (id, oldFields, clearedFields, newFields) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.posts)));
    observer.removed = (id, oldValue) => this.updateRows(_.cloneDeep(_.values(ddpClient.collections.posts)));
  },

  makeSubscription() {
    ddpClient.subscribe("posts", [], (results) => {
      debugger

      this.setState({posts: ddpClient.collections.posts});
      this.setState({test: _.cloneDeep(_.values(ddpClient.collections.posts))});
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFriend}
        style={styles.listView}
      />
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

  renderFriend: function(posts) {
    return (
      <View style={styles.container}>
        <Text style={styles.firstName}>{posts.title}</Text>
        
      </View>
    );
  },
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  firstName: {
    flex: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastName: {
    flex: 5,
    fontSize: 18,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
});