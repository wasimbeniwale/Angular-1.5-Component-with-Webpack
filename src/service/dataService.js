"use strict";

import 'angular';

angular.module("app.service").factory('dataService', ["$q", function($q){

    function getData(){
        var dfd = $q.defer();
        dfd.resolve(1);
        return dfd.promise;
    }

    return {
        getData: getData
    }
}]);