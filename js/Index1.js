/// <reference path="../typings/tsd.d.ts" />
var Index1Mode = angular.module("Index1", []);
Index1Mode.controller("Index1Ctr", ["$scope", function($scope) {
    $scope.Index1ctrFlavor = "qingDao";
}]);
Index1Mode.directive("drink", function() {
    return {
        restrict: 'AE',
        scope: { flavor: '@' },
        template: '<div>{{flavor}}</div>'
    }

});