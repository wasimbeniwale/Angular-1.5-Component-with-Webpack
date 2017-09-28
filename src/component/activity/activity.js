import 'angular';
import activityTemplate from './activity.html';

angular.module("app.component").component("activity", {
    template: activityTemplate,
    controller: [function(){
        this.name = "ACTIVITY_WELCOME_MESSAGE";
    }]
});