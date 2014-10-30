'use strict';

define(['angular','./ctrl','./route'], function (angular,ctrl,route) {
    /* Controllers */
    var app =  angular.module('View1Mdl', [])
        // Sample controller where service is being used
        .controller('View1Ctrl', ['$scope', 'version', ctrl]);
    app.config(['$routeProvider',route]);
    return app;
});