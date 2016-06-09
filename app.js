angular.module('routes', [ngRoute])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			//controller:
			templateUrl: 'views/home.html'
		})

		.when('/', {
			templateUrl: 'views/songs.html'
		})
		.when('/', {
			templateUrl: 'views/contactus.html' 
		})		
		.otherwise({
			redirectTo: '/'
		});

});