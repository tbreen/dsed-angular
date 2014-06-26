'use strict';

angular.module('app').controller('TemplateController', function ($scope) {

    // model
    var model = $scope.model = {
        widgets: [
            {
                id: 'jira',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 6,
                dataSizeY: 3,
                template: '/templates/jira_widget.html'
            },
            {
                id: 'git',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 6,
                dataSizeY: 3,
                template: '/templates/git_widget.html'
            },
            {
                id: 'stock',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 2,
                dataSizeY: 2,
                template: '/templates/stock_widget.html',
                className: 'stock-widget'
            },
            {
                id: 'clock',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 2,
                dataSizeY: 2,
                template: '/templates/clock_widget.html'
            },
            {
                id: 'weather',
                dataRow: 1,
                dataCol: 1,
                dataSizeX: 2,
                dataSizeY: 2,
                template: '/templates/weather_widget.html'
            }

        ]
    };

    // actions
    var action = $scope.action = {
        temp: function() {
            model.temp = 'state changed!';
        }
    };

});