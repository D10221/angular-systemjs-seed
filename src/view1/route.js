'use strict';
define(['angular'], function(angular) {
    return  function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'src/view1/view.html',
            controller: 'View1Ctrl'
        });
    };
});
