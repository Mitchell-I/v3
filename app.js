var app = angular.module('app', ['ui.router']);
/* This is the piece that defines the state providers. */
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
//Set up the states
  $stateProvider
  //routing for home states
      .state('home', {
      url: '/home',
      templateUrl: "templates/content/home.html"
    })
    .state('pc-builder', {
      url: '/pc-builder',
      templateUrl: "templates/content/pc-builder.html"
  })

	.state('moederborden', {
      url: '/moederborden',
      templateUrl: "templates/content/moederborden.html"
    })
      .state('details/:pc_item_id', {
          url: "details/:pc_item_id",
          templateUrl: "templates/content/details.html"
    })

	.state('processoren', {
      url: '/processoren',
      templateUrl: "templates/content/processoren.html"
    })
	.state('geheugen', {
      url: '/geheugen',
      templateUrl: "templates/content/geheugen.html"
    })
	.state('behuizingen', {
      url: '/behuizingen',
      templateUrl: "templates/content/behuizingen.html"
    })


});


