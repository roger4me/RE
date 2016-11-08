/// <reference path="../typings/tsd.d.ts" />
var indexMod = angular.module("Index", []);
indexMod.directive("hello", function() {
    return {
        scope: {},
        restrict: "AE",
        template: "<div><input type='text' ng-model='userName'>{{userName}}</div>",
    }

});