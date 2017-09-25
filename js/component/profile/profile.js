// import 'angular';
import profileTemplate from './profile.html';

angular.module("app.component").component("profile", {
    // templateUrl:'templates/profile.html'
    template: profileTemplate,
    controller: ["$scope", function($scope){
        $scope.name = "In profile controller.";

        $scope.isCollapsed = false;
    }]
});