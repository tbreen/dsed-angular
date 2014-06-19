'use strict';

angular.module('app', [
    'ngRoute'
]).config(function () {
    // configure routes here
});

$(function(){ //DOM Ready

    $('.gridster ul').gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });
});


