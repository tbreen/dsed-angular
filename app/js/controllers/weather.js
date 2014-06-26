'use strict';

var app = angular.module('app');

app.controller('WeatherController', ['$http', '$scope', function($http, $scope) {

    $scope.weather = {}
    $scope.weather.location = [];

    $http.get('data/weather.json').success(function (data) {
        $scope.weather.location = data;
    });

}]);
