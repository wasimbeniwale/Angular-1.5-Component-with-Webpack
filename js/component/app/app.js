import 'angular';
import appTemplate from './app.html';

angular.module("app.component", []).component("app", {
    template: appTemplate,
    controller: ['$scope','$state', '$translate', function($scope, $state, $translate){

        var selectedLanguage = "en";

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
                "state": "activity",
                "name": "Activity",
                "translate_key": "MENU_ITEM_ACTIVITY"
            });

            menus.push({
                "label": "Profile",
                "state": "profile",
                "name": "Profile",
                "translate_key": "MENU_ITEM_PROFILE"
            });

            return menus;
        }

        $scope.sideMenus = getSideMenus();
        $scope.activeMenu = $scope.sideMenus[0].name.toLowerCase();

        $scope.goToState = function(stateName){
            $state.go(stateName);
            setActive(stateName);
        }

        function setActive(menuLabel){
            $scope.activeMenu = menuLabel.toLowerCase();
        }

        $scope.changeLanguage = function(){
            if(selectedLanguage === "en"){
                selectedLanguage = "fr";
            } else {
                selectedLanguage = "en";
            }
            $translate.use(selectedLanguage);
        }

    }]
});