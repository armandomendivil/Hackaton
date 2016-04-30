import React, {
  Text,
  TextInput,
  View,
} from 'react-native';

import Button from './button';
var _ = require('lodash');
import ddpClient from './ddp';

if (typeof process === 'undefined') process = {};
process.nextTick = setImmediate;

export default React.createClass({
  getInitialState() {
    return {
      posts: {},
      test: {
        title: 'hi'
      }
    }
  },

  componentDidMount() {
    this.makeSubscription();
    this.observePosts();
  },

  observePosts() {
    let observer = ddpClient.observe("posts");
    observer.added = (id) => {
      console.log(ddpClient.collections.posts)
      this.setState({posts: ddpClient.collections.posts})
      this.setState({test: ddpClient.collections.posts[id]});
    }
    observer.changed = (id, oldFields, clearedFields, newFields) => {
      this.setState({posts: ddpClient.collections.posts})
    }
    observer.removed = (id, oldValue) => {
      this.setState({posts: ddpClient.collections.posts})
    }
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

  render() {
    let count = Object.keys(this.state.posts).length;
    var boole = typeof this.state.test == 'object'

    return (
      <View >
        <Text>Activities: {boole && this.state.test.title}   Total:{count}</Text>
        <Button text="Add" onPress={this.addActivity} />

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Button text="Sign Out" onPress={this.handleSignOut} />
      </View>
    );
  }
});
