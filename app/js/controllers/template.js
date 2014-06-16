'use strict';

angular.module('app').controller('TemplateController', function ($scope) {

    // model
    var model = $scope.model = {
        temp: 'this is a temp message'
    };

    // actions
    var action = $scope.action = {
        temp: function() {
            model.temp = 'state changed!';
        }
    };

});