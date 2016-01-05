angular.module("lessonHider")
    .directive("lessonDirective", function () {
        return {
            templateUrl: "js/lesson/lessonTmpl.html",
            restrict: 'E',
            link: function (scope, element, attributes) {
                // console.log(scope, element, attributes);
            }
        }
    });