Posts = new Mongo.Collection('posts');
Employees = new Mongo.Collection('employees');

Meteor.methods({
  'addPost': function(title) {
    Posts.insert({
      title: title,
      createdAt: new Date(),
      userId: this.userId
    });
  },

  'editTask': function(postProperties) {
      var emp =  Employees.findOne({name: "Armando Mendivil"})
      console.log(postProperties)
      Employees.update( emp._id, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        console.log('UPDATE')
      }
    });
  }
})




