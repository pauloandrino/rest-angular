angular.module('produtoModule')
.service('produtoService', [
         '$http',
         function produtoService($http) {
        	 
        	 produtoService.response = {};
        	 produtoService.error    = {};
        	 produtoService.status   = 200;

        	 var callbackSuccess = function(data, status) {
        		produtoService.response = data;
        		produtoService.status = status;
        	 };
        	 
        	 var callbackError = function(data, status) {
        		 produtoService.error = data;
         		produtoService.status = status; 
        	 };
        	 
        	 produtoService.getAllProducts = function() {
        		return $http.get('http://localhost:8080/rest/rest/produto/findAll')
        		.success(callbackSuccess)
        		.error(callbackError);
        	 };
        	 
        	 produtoService.createProduct = function(product) {
        		 return $http({
        			 url:'http://localhost:8080/rest/rest/produto/create',
        			 data: product,
        			 method: 'POST'
        		 })
        		 .success(callbackSuccess)
        		 .error(callbackError);
        	 };
        	 
        	 return produtoService;
         }
]);