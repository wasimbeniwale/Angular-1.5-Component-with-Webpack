import 'angular';
import mapTemplate from './map.html';

angular.module("app.component").component("map", {
    template: mapTemplate,
    controller: [function(){
        this.name = "MAP_WELCOME_MESSAGE";
        this.isCollapsed = false;

        this.map = {
            center:{
                latitude: 45, 
                longitude: -73
            },
            zoom: 8
        };
    }]
});