angular.module('ThreeLovelyLadiesPage', ['ngRoute', 'RouteControllers', 'NavigationDirective']);

angular.module('ThreeLovelyLadiesPage').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
	})

	$routeProvider.when('/listen', {
		templateUrl: 'templates/listen.html'
	})

	$routeProvider.when('/watch', {
		templateUrl: 'templates/watch.html'
	})

	$routeProvider.when('/contact', {
		templateUrl: 'templates/contact.html'
	})

});