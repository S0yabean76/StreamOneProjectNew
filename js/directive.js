angular.module('NavigationDirective',[])
	.directive('showNavbar', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/show-navbar.html'
		};
	})

	.directive('showFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/show-footer.html'
		};
	})

	
