"use strict";

import '../css/style.css';

import 'angular';
import 'angular-ui-router';

import './component/app.js';
import './component/activity.js';
import './component/profile.js';

angular.module("app", ['ui.router', "app.component"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    var appState = {
        name: 'app',
        url: '/app',
        component: 'app'
    };

    var activityState = {
        name: 'activity',
        url: '/activity',
        component: 'activities'
    };

    var profileDetails = {
        name: 'profileDetails',
        url: '/profile',
        component: 'profileDetails'
    };

    $stateProvider.state(activityState);
    $stateProvider.state(profileDetails);

    $urlRouterProvider.otherwise('/activity');
}]);