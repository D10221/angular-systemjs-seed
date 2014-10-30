'use strict';
define([
      'angular',
      'angularRoute',
      'src/version/_module',
      'src/view1/_module',
      'src/view2/_module',
      'src/view3/_module'
    ],
    function (angular, route, version, view1, view2,view3) {
      //view3.getModule(angular);
      return angular.module('myApp', [
        'ngRoute',
        'VersionMdl',
        'View1Mdl',
        'View2Mdl',
        'View3Mdl'
      ]);
    });
