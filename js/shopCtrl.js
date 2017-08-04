app.controller('shopCtrl', function($scope, shopService) {
    $scope.getProducts = function() {
        shopService.getProducts().then(function(response) {
            $scope.products = response;
            console.log($scope.products);
        })
    }

    $scope.getProducts();
});