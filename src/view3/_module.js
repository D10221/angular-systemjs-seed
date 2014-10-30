"use strict";

import angular from 'angular';
import {ViewCtrl,injectableViewCtrl} from './ctrl';

class Route {
    constructor(templateUrl,controller){
        this.templateUrl = templateUrl;
        this.controller = controller;
    }
}

var mdl = angular.module('View3Mdl', []);
mdl.controller('View3Ctrl', injectableViewCtrl);
mdl.config(['$routeProvider', $routeProvider => {
    $routeProvider.when('/view3',
        new Route('src/view3/view.html','View3Ctrl'));
}]);

export function getModule(){
    return mdl;
}