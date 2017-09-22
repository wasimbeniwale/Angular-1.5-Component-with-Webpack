import 'angular';
import appTemplate from '../../templates/app.html';

angular.module("app.component", []).component("app", {
    // templateUrl:'templates/app.html',
    template: appTemplate,
    controller: ['$scope','$state', function($scope, $state){
        
        $scope.goToActivity = function(){
            $state.go('activity');
        }

        $scope.goToProfile = function(){
            $state.go('profileDetails');
        }
    }]
});