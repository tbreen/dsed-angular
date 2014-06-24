'use strict';

angular.module('app')
.controller('GitController', function ($scope, $http) {

    // model
    var model = $scope.model = {
        foo: "bar"
    };

    // actions
    var action = $scope.action = {
        temp: function() {
            model.temp = 'state changed!';
        }
    };

    $http({method: 'GET', url: '/data/git-commits.json'}).
    success(function (data, status, headers, config) {
        $scope.model.commits = data.entry;
    }).
    error(function (data, status, headers, config) {
        console.log('error getting git-commits.json')
    });

    $http({method: 'GET', url: '/data/git-projects.json'}).
    success(function (data, status, headers, config) {
        $scope.model.projects = data;
    }).
    error(function (data, status, headers, config) {
        console.log('error getting git-projects.json')
    });

});