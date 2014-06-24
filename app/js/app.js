'use strict';

angular.module('app', [
    'ngRoute',
    'angular-flexslider'
]).config(function () {
    // configure routes here
});

$(function(){ //DOM Ready

    $('.gridster ul').gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 100],
        max_size_x: 8,
        resize: {
          enabled: false
        }
    });
});


