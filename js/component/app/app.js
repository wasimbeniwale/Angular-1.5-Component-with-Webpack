import 'angular';
import appTemplate from './app.html';

angular.module("app.component").component("app", {
    template: appTemplate,
    controller: ['$state', '$translate', 'dataService', function($state, $translate, dataService){

        var selectedLanguage = "en";

        this.sideMenus = [];
        this.activeMenu = '';

        this.sideMenuStyle = {
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

        this.sideMenus = getSideMenus();
        this.activeMenu = this.sideMenus[0].name.toLowerCase();

        function goToState(stateName){
            $state.go(stateName);
            this.setActive(stateName);
        }

        function setActive(menuLabel){
            this.activeMenu = menuLabel.toLowerCase();
            dataService.getData().then(function(res){
                console.log("data from service: " + res);
            });
        }

        function changeLanguage(){
            if(selectedLanguage === "en"){
                selectedLanguage = "fr";
            } else {
                selectedLanguage = "en";
            }
            $translate.use(selectedLanguage);
        }

        this.goToState = goToState,
        this.changeLanguage = changeLanguage,
        this.setActive = setActive
    }]
});