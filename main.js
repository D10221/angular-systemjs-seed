'use strict';
/*global System, window*/

window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;

System.config({
    baseURL: '/angular-seed',
    paths: {
        'app/*': '/src/*.js',
        'app': 'src/app.js',
        angular: 'bower_components/angular/angular.js',
        angularRoute: 'bower_components/angular-route/angular-route.js',
        angularMocks: 'bower_components/angular-mocks/angular-mocks.js',
        text: 'bower_components/requirejs-text/text.js',
        tsmaps: 'node_modules/traceur-source-maps/lib/traceur-source-maps.js'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': {
            deps: ['angular'], 'exports': 'angular'
        },
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!"

Promise.all([System.import('angular'), System.import('app')])
    .then(function (modules) {
        var app = modules[1];
        var angular = modules[0];
        angular.element().ready(function () {
            angular.resumeBootstrap([app.name]);
        });
    })
    .catch(console.error.bind(console));
