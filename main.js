"use strict";

import './assets/css/style.css';

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'ngmap';

import './src/component/mainComponentModule.js';
import './src/component/app/app.js';
import './src/component/activity/activity.js';
import './src/component/profile/profile.js';
import './src/component/mapView/mapView.js';

import './src/service/mainServiceModule.js';
import './src/service/dataService.js';

angular.module("app", ["ui.router", "ngAnimate", "ngSanitize", "ui.bootstrap", "pascalprecht.translate", "app.component", "app.service", "ngMap"])

.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider){

    // class State{
    //     constructor(name, url, component){
    //         this.name = name;
    //         this.url = url;
    //         this.component = component;
    //     }
    // }

    function State(name, url, component){
        this.name = name;
        this.url = url;
        this.component = component;
    }
    
    // var appState = new State('app', '/app', 'app');
    var activityState = new State('activity', '/activity', 'activity');
    var profile = new State('profile', '/profile', 'profile');
    var mapView = new State('mapView', '/mapView', 'mapView');

    $stateProvider.state(activityState);
    $stateProvider.state(profile);
    $stateProvider.state(mapView);

    $urlRouterProvider.otherwise('/activity');

    // angular translations    
    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/translations/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
}]);