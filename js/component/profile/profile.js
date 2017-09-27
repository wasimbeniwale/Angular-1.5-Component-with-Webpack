import 'angular';
import profileTemplate from './profile.html';

angular.module("app.component").component("profile", {
    template: profileTemplate,
    controller: ["$scope", function($scope){
        $scope.name = "PROFILE_WELCOME_MESSAGE";

        $scope.isCollapsed = false;
    }]
});