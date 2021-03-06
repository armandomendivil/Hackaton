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

// Get Employees
Meteor.publish("employees", function () {
   return Employees.find({});
});

// Log of activity
Meteor.publish("logActivity", function () {
	return LogActivity.find({}, {sort: {createdAt: -1}})
});

