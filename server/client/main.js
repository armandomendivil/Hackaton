import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.onCreated(function() {
  this.subscribe('posts');
  this.subscribe('employees');
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

  'click #addActivity': function(e) {
    e.preventDefault();
    debugger
    var postProperties = {
      title: $('#activity').val(),
      createdAt: new Date()
    }
    Meteor.call('editTask', postProperties);
  }
});

