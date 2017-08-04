app.controller('productDetailsCtrl', function($scope, shopService, $stateParams) {
    $scope.getProducts = function(id) {
        shopService.getProduct(id).then(function(response) {
            $scope.curProduct = response;
            console.log($scope.curProduct)
        });
    }

    $scope.getProducts($stateParams.id);

});