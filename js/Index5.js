/// <reference path="../typings/tsd.d.ts" />
var Index5Mod = angular.module("Index5", []);
Index5Mod.controller("Index5Ctr", ['$scope', function($scope) {
    $scope.name = 'Roger';
    $scope.sex = 'Man';
    $scope.say = function() {
        alert($scope.name + " is a " + $scope.sex);
    }
}]);
Index5Mod.directive("roger", function() {
    return {
        restrict: "AE",
        scope: {
            myName: "@",
            mySex: "=",
            getName: "&"
        },
        template: "<input type='text' ng-model='myName'/><br/><input type='text'/><br/>" +
            "<input type='button' ng-click='getName()' value='执行子域的say方法'/>"
    }

});