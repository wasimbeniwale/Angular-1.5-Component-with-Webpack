// import 'angular';
import appTemplate from './app.html';

angular.module("app.component", []).component("app", {
    // templateUrl:'templates/app.html',
    template: appTemplate,
    controller: ['$scope','$state', function($scope, $state){

        $scope.sideMenuStyle = {
            'height': getSideMenuHeight(),
            'overflow': 'scroll',
            'position': 'static'
        }

        function getSideMenuHeight(){
            return (window.innerHeight) + "px";
        }

        function getSideMenus(){
            var menus = [];
            menus.push({
                "label": "Activity",
                "state": "activity"
            });

            menus.push({
                "label": "Profile",
                "state": "profile"
            });

            return menus
        }

        $scope.sideMenus = getSideMenus();
        $scope.activeMenu = $scope.sideMenus[0].label.toLowerCase();

        $scope.goToState = function(stateName){
            $state.go(stateName);
            setActive(stateName);
        }

        function setActive(menuLabel){
            $scope.activeMenu = menuLabel.toLowerCase();
        }


    }]
});