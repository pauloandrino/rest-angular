angular.module('produtoModule')
.controller('produtoCtrl', [
    '$scope',
    'produtoService',
    function($scope, produtoService){
    	
    	var error = function() {
    		console.log('deu Pau!!');
    	}
    	
    	$scope.product = {};
    	
    	$scope.getAllProducts = function() {
    		produtoService.getAllProducts().then(
    				function(){
    					console.log(produtoService.response);
    				},
					error
    		);
    		
    	}
    	
    	$scope.createProduct = function() {
    		produtoService.createProduct($scope.product).then(
    				function(){
    					console.log("Produto criado com sucesso!");
    				},
					error
    		);
    	}
    }
]);