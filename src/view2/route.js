'use strict';

define([], function() {
    return function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'src/view2/view2.html',
            controller: 'View2Ctrl'
        });
    };
});

