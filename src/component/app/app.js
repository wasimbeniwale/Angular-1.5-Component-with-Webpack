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

        // class MenuItem{
        //     constructor(label, state, name, translate_key){
        //         this.label = label;
        //         this.state = state;
        //         this.name = name;
        //         this.translate_key = translate_key;
        //     }
        // }

        function MenuItem(label, state, name, translate_key){
            this.label = label;
            this.state = state;
            this.name = name;
            this.translate_key = translate_key;
        }

        function getSideMenus(){
            var menus = [];
            
            menus.push(new MenuItem("Activity", "activity", "Activity", "MENU_ITEM_ACTIVITY"));
            menus.push(new MenuItem("Profile", "profile", "Profile", "MENU_ITEM_PROFILE"));
            menus.push(new MenuItem("Map", "map", "Map", "MENU_ITEM_MAP"));

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