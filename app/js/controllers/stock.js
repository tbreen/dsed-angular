'use strict';

var app = angular.module('app');

app.controller('StockController', ['$http', '$scope', function($http, $scope) {

    $scope.stocks = [];

    $http.get('js/data/stock_data.json').success(function (data) {
        $scope.stocks = data;
    });

}]);
