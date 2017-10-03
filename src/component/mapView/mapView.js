import 'angular';
import mapTemplate from './mapView.html';

angular.module("app.component").component("mapView", {
    template: mapTemplate,
    controller: ["NgMap", function(NgMap){

        var vm = this;

        vm.name = "MAP_WELCOME_MESSAGE";
        vm.isCollapsed = false;

        vm.googleMapsUrl="https://maps.google.com/maps/api/js?libraries=placeses,visualization,drawing,geometry,places&key=AIzaSyBSNxpLqLVNWMEPXJbQretI51ZMeNDtoXw";
        vm.types = [];
        vm.types.push('address');

        vm.sourcePlace = null;
        vm.destinationPlace = null;

        vm.sourceAddress = null;
        vm.destinationAddress = null;

        vm.doShowMap = false;

        NgMap.getMap().then(function(map){
            vm.map = map;
        });

        function sourcePlaceChanged(){
            vm.sourcePlace = this.getPlace();
            console.log('location', vm.sourcePlace.geometry.location);
            // vm.map.setCenter(vm.sourcePlace.geometry.location);
        }

        function destinationPlaceChanged(){
            vm.destinationPlace = this.getPlace();
            console.log('location', vm.destinationPlace.geometry.location);
            // vm.map.setCenter(vm.destinationPlace.geometry.location);
        }

        function showRoute(){
            vm.doShowMap = true;
        }

        this.sourcePlaceChanged = sourcePlaceChanged;
        this.destinationPlaceChanged = destinationPlaceChanged;
        this.showRoute = showRoute;
    }]
});