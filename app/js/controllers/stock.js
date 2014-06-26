'use strict';

var app = angular.module('app');

app.controller('StockController', ['$http', '$scope', function($http, $scope) {

    $scope.stocks = [];

    $http.get('js/data/stock_data.json').success(function (data) {
        $scope.stocks = data;

        //After stocks are loaded build d3 graph
        var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 300 - margin.left - margin.right,
            height = 120 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d-%b-%y").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom");

        // var yAxis = d3.svg.axis()
        //     .scale(y)
        //     .orient("left");

        var area = d3.svg.area()
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.close); });

        var svg = d3.select(".stock-widget").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("js/data/data.tsv", function(error, data) {
            data.forEach(function(d) {
              d.date = parseDate(d.date);
              d.close = +d.close;
          });

            x.domain(d3.extent(data, function(d) { return d.date; }));
            y.domain([0, d3.max(data, function(d) { return d.close; })]);

            svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area);

            // svg.append("g")
            // .attr("class", "x axis")
            // .attr("transform", "translate(0," + height + ")");
            // .call(xAxis);

            // svg.append("g")
            // .attr("class", "y axis")
            // .call(yAxis)
            // .append("text")
            // .attr("transform", "rotate(-90)")
            // .attr("y", 6)
            // .attr("dy", ".71em")
            // .style("text-anchor", "end");
            // .text("Price ($)");
        });

    });

}]);
