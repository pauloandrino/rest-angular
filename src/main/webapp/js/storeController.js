var app = angular.module("storeApp", []);

app.controller('storeController', function($scope) {
	
	$scope.menu = [{titulo:'Cadastro de Cliente', texto:'Cadastrar clientes'},
	               {titulo:'Consulta de Cliente', texto:'Consultar clientes'},
	               {titulo:'Cadastro de Produto', texto:'Cadastrar produtos'},
	               {titulo:'Consulta de Produto', texto:'Consultar produtos'}]

	$scope.conteudoTexto = '';
	
	$scope.mostraTexto = function(item) {
		$scope.conteudoTexto = item.texto;
	}

});
