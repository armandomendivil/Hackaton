import { Meteor } from 'meteor/meteor';


Meteor.startup(function() {
  if (Posts.find().count() === 0) {
    for (i = 1; i <= 10; i++) {
      Posts.insert({title: 'Post', createdAt: -1});
    }
  }
});


Meteor.publish('posts', function() {
  return Posts.find();
});

