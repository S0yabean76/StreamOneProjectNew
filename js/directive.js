angular.module('NavigationDirective',[])
	.directive('showNavbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/show-navbar.html'
		};
	});