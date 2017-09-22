import 'angular';
import activityTemplate from '../../templates/activity.html';

angular.module("app.component").component("activities", {
    template: activityTemplate,
    controller: ["$scope", function($scope){
        $scope.name = "In actiity controller.";
    }]
});