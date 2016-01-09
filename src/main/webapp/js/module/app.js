angular.module('appModule', [
              'produtoModule',
              'menuModule',
              'ngRoute'
]).config(function($routeProvider) {
	
	$routeProvider
	.when('/produto', {
		templateUrl: '../../rest/produto.html',
		controller: 'produtoCtrl'
	}).otherwise({
		redirectTo: 'http://www.pudim.com.br'
	});
});