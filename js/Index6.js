/// <reference path="../typings/tsd.d.ts" />
var Index6Mod = angular.module("Index6", []);
Index6Mod.controller("Index6Ctr", function($scope) {
    $scope.expanders = [
        { title: "roger is handsome", text: "roger is  handsome man like TW" },
        { title: "Eason is handsome", text: "Eason is  handsome man like VC" },
        { title: "steven is handsome", text: "steven is  handsome man like WK" }
    ];
});
Index6Mod.directive("accordion", function() {
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function() {

            var expanders = [];
            this.gotOpend = function(selectExpander) {
                angular.forEach(expanders, function(expander) {
                    if (selectExpander != expander) {
                        expander.showMe = false;
                    } else {
                        expander.showMe = true;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});
Index6Mod.directive("expander", function() {
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: { title: '=expanderTitle' },
        template: '<div><div ng-click="toggle()">{{title}}</div><div ng-show="showMe" ng-transclude></div></div>',
        link: function(scope, element, attrs, accordion) {
            scope.showMe = false;
            accordion.addExpander(element);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordion.gotOpend(element);
            }
        }
    }
});