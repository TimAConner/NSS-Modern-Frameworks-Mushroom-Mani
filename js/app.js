'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

// Other dependencies below

const app = angular.module('mushroomMani', [ngRoute]);


require('./factories');
require('./controllers');


// Put routes below
app.config(($routeProvider) => {
    $routeProvider
    .when("/", {
       templateUrl: "../partials/mushroomList.html", 
       controller: "MushroomCtrl"
    })
    .otherwise("/");
});

module.exports = app;