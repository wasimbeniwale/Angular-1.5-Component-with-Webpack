"use strict";

import '../css/style.css';

// import 'angular';
// import 'angular-ui-router';

import './component/app/app.js';
import './component/activity/activity.js';
import './component/profile/profile.js';

angular.module("app", ["ui.router", "ngAnimate", "ui.bootstrap", "app.component"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    var appState = {
        name: 'app',
        url: '/app',
        component: 'app'
    };

    var activityState = {
        name: 'activity',
        url: '/activity',
        component: 'activity'
    };

    var profile = {
        name: 'profile',
        url: '/profile',
        component: 'profile'
    };

    $stateProvider.state(activityState);
    $stateProvider.state(profile);

    $urlRouterProvider.otherwise('/activity');
}]);