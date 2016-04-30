Posts = new Mongo.Collection('posts');

Meteor.methods({
  'addPost': function(title) {
    Posts.insert({
      title: title,
      createdAt: new Date(),
      userId: this.userId
    });
  },

  'deletePost': function() {
    let post = Posts.findOne();
    if (post) {
      Posts.remove({_id: post._id});
    }
  }
})
