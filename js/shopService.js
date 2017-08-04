app.service('shopService', function($http) {
    this.getProducts = function() {
        return $http({
            method: 'get',
            url: 'https://practiceapi.devmountain.com/products',
        }).then(function(response) {
            return this.products = response.data;
        })
    }

    this.getProduct = function(id) {
        return $http({
            method: 'get',
            url: 'https://practiceapi.devmountain.com/products/' + id,
        }).then(function(response) {
            return this.curProduct = response.data;
        })
    }
});