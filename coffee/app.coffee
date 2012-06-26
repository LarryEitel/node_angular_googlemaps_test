"use strict"
angular.module("ofm", [ "ofm.filters", "GoogleMaps", "ofm.directives" ]).config [ "$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $routeProvider.when("/",
    templateUrl: "partials/home"
  ).when("/map",
    templateUrl: "partials/map"
    controller: MapCtrl
  ).otherwise redirectTo: "/"
  $locationProvider.html5Mode true
 ]