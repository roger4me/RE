/// <reference path="../typings/tsd.d.ts" />
var Index4Mod = angular.module("Index4", []);
Index4Mod.directive("expander", function() {
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        scope: { title: '@expanderTitle' },
        template: '<div><div ng-click="toggle()">{{title}}</div><div ng-show="showMe" ng-transclude></div></div>',
        link: function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});
Index4Mod.controller('Index4Ctr', function($scope) {
    $scope.title = '点击展开';
    $scope.text = '这里是内部的内容';

});