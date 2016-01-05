angular.module("lessonHider")
    .directive("lessonDirective", function () {
        return {
            templateUrl: "js/lesson/lessonTmpl.html",
            restrict: 'E',
            scope: {
                lesson: "="
                // twoWayDataBinding: '=',
                // stringBinding: '@',
                // functionBinding: '&'
            },
            link: function (scope, element, attributes) {
                // console.log(scope, element, attributes);
            }
        }
    });