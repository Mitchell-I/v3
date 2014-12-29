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
	.state('moederborden', {
      url: '/moederborden',
      templateUrl: "templates/content/moederborden.html"
    })
	.state('processoren', {
      url: '/processoren',
      templateUrl: "templates/content/processoren.html"
    })
	.state('geheugen', {
      url: '/geheugen',
      templateUrl: "templates/content/geheugen.html"
    })
		.state('moederborden.detail', {
        url: "/view/:id",
        templateUrl: 'templates/content/moederbordview.html',
        controller: function ($stateParams) {
            console.log($stateParams);
	}});

});


