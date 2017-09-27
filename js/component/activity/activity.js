import 'angular';
import activityTemplate from './activity.html';

angular.module("app.component").component("activity", {
    template: activityTemplate,
    controller: ["$scope", function($scope){
        $scope.name = "ACTIVITY_WELCOME_MESSAGE";
    }]
});