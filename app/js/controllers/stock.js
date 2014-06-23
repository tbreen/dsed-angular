'use strict';

var app = angular.module('app');


app.factory('Stock', ['$http', '$q', function($http, $q) {
    var stock = $q.defer();

    $http.get('js/data/stock_data.json').success(function (data) {
        stock.resolve(data);
    });

    return stock.promise;
}]);

app.controller('StockController', ['Stock', '$scope', function(Stock, $scope) {

    Stock.then(function(data){
        $scope.data = data[0];
    });

}]);
