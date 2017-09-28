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

import './src/component/mainComponentModule.js';
import './src/component/app/app.js';
import './src/component/activity/activity.js';
import './src/component/profile/profile.js';
import './src/component/map/map.js';

import './src/service/mainServiceModule.js';
import './src/service/dataService.js';

angular.module("app", ["ui.router", "ngAnimate", "ngSanitize", "ui.bootstrap", "pascalprecht.translate", "app.component", "app.service"])

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
    var map = new State('map', '/map', 'map');

    $stateProvider.state(activityState);
    $stateProvider.state(profile);
    $stateProvider.state(map);

    $urlRouterProvider.otherwise('/activity');

    // angular translations
    
    // $translateProvider.translations('en', {
    //     APP_TITLE: 'App Name',
    //     MENU_ITEM_ACTIVITY: 'Activity',
    //     MENU_ITEM_PROFILE: 'Profile',
    //     BUTTON_CHANGE_LANGUAGE: 'Change Language',
    //     ACTIVITY_WELCOME_MESSAGE: 'In activity controller',
    //     PROFILE_WELCOME_MESSAGE: 'In profile controller'
    // });

    // $translateProvider.translations('fr', {
    //     APP_TITLE: 'Nom de l\'application',
    //     MENU_ITEM_ACTIVITY: 'Activité',
    //     MENU_ITEM_PROFILE: 'Profil',
    //     BUTTON_CHANGE_LANGUAGE: 'Changer de langue',
    //     ACTIVITY_WELCOME_MESSAGE: 'Dans le contrôleur d\'activité',
    //     PROFILE_WELCOME_MESSAGE: 'Dans le contrôleur de profil'
    // });

    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/translations/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
}]);