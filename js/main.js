"use strict";

import '../css/style.css';

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-translate';

import './component/app/app.js';
import './component/activity/activity.js';
import './component/profile/profile.js';

angular.module("app", ["ui.router", "ngAnimate", "ngSanitize", "ui.bootstrap", "app.component", "pascalprecht.translate"])

.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider){

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

    // angular translations
    $translateProvider.translations('en', {
        APP_TITLE: 'App Name',
        MENU_ITEM_ACTIVITY: 'Activity',
        MENU_ITEM_PROFILE: 'Profile',
        BUTTON_CHANGE_LANGUAGE: 'Change Language',
        ACTIVITY_WELCOME_MESSAGE: 'In activity controller',
        PROFILE_WELCOME_MESSAGE: 'In profile controller'
    });

    $translateProvider.translations('fr', {
        APP_TITLE: 'Nom de l\'application',
        MENU_ITEM_ACTIVITY: 'Activité',
        MENU_ITEM_PROFILE: 'Profil',
        BUTTON_CHANGE_LANGUAGE: 'Changer de langue',
        ACTIVITY_WELCOME_MESSAGE: 'Dans le contrôleur d\'activité',
        PROFILE_WELCOME_MESSAGE: 'Dans le contrôleur de profil'
    });

    $translateProvider.preferredLanguage('en');
}]);