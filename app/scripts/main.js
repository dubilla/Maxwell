/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        chart: {
            exports: 'Chart'
        },
        backboneLocalstorage: {
            deps: [
                'backbone'
            ],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        chart: '../bower_components/Chart.js/Chart',
        text: '../bower_components/requirejs-text/text',
        backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        'requirejs-text': '../bower_components/requirejs-text/text',
        Chart: '../bower_components/Chart.js/Chart.min'
    }
});

require([
    'backbone',
    'views/app',
    'routers/router'
], function (Backbone, AppView, Workspace) {
    /*jshint nonew:false*/
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application 
    console.log('UNBELIEVABLE!');
    new AppView();
});