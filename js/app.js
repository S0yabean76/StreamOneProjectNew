angular.module('3LovelyLadiesPage', ['ngRoute', 'RouteControllers', 'NavigationDirective']);

angular.module('3LovelyLadiesPage').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html'
	});

});