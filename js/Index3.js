/// <reference path="../typings/tsd.d.ts" />
var Index3Mod = angular.module("Index3", []);
Index3Mod.directive("contenteditable", function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            element.bind('keyup', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(element.text());
                });
            });

            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };

            ctrl.$setViewValue(element.html());
        }

    }
});