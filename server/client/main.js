import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.onCreated(function() {
  this.subscribe('posts');
});

Template.home.helpers({
  count() {
    return Posts.find().count();
  }
});

Template.home.events({
  'click #increment': function(e) {
    e.preventDefault();

    Meteor.call('addPost');
  },

  'click #decrement': function(e) {
    e.preventDefault();

    Meteor.call('deletePost');
  }
})