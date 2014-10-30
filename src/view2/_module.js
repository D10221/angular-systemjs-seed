"use strict";
define(['angular','./View2Ctrl','./route'],function(angular,View2Ctrl,route){
    var mdl = angular.module('View2Mdl',[]);
    mdl.controller('View2Ctrl', ['$scope', View2Ctrl]);
    mdl.config(['$routeProvider',route]);
    return angular;
});