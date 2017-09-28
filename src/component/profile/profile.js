import 'angular';
import profileTemplate from './profile.html';

angular.module("app.component").component("profile", {
    template: profileTemplate,
    controller: [function(){
        this.name = "PROFILE_WELCOME_MESSAGE";
        this.isCollapsed = false;
    }]
});