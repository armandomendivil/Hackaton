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
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
    }
});

Template.Login.events({  
    'submit #login': function(event, template) {
        // 1. Collect the username and password from the form
        var username = template.find('#login-username').value,
            password = template.find('#login-password').value;

        // 2. Attempt to login.
        Meteor.loginWithPassword(username, password, function(error) {
            // 3. Handle the response
            if (Meteor.user()) {
                // Redirect the user to where they're loggin into. Here, Router.go uses
                // the iron:router package.
                Router.go('dashboard');
            } else {
                // If no user resulted from the attempt, an error variable will be available
                // in this callback. We can output the error to the user here.
                var message = "There was an error logging in: <strong>" + error.reason + "</strong>";

                template.find('#form-messages').html(message);
            }

            return;
        });

        return false;
    }
});