'use strict';

define(['angular'], function (angular) {
    /* Controllers */
    return function ($scope, version) {
        $scope.Xxx = angular.isDefined(this.Xxx); //Blsht, justify angular import
        $scope.scopedAppVersion = version;
    };
});
