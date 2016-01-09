angular.module('menuModule')
.controller('menuCtrl', [
    '$scope',
    '$location',
    function($scope, $location){
    	
    	$scope.menu = [{titulo:'Produto', link:'/produto'},
    	               {titulo:'Cliente', link:'/cliente'}];

    	$scope.redirect = function(link){
    		$location.path(link);
    	}
    }
]);