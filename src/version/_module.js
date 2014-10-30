"use strict";

define(['angular'], function (angular) {

    var mdl = angular.module('VersionMdl', []);
    /* Services */

    // Demonstrate how to register services
    // In this case it is a simple value service.
    mdl.value('version', '0.1');

    /* Directives */
    mdl.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);

    /* Filters */
    mdl.filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/%VERSION%/mg, version);
        };
    }]);

    return mdl;

});