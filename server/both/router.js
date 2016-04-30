/* client/routes/router.js */

// Set a default layout template for all routes.
Router.configure({  
  layoutTemplate: 'Layout'
});

// As opposed to explicitly setting it with each route...
Router.route('/my/route', function () {  
  this.layout('Layout');
  this.render('MyPage');
}, {
  name: 'my.page'
});