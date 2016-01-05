angular.module("lessonHider")
    .directive("lessonDirective", function () {
        return {
            templateUrl: "js/lesson/lessonTmpl.html",
            restrict: 'E'
        }
    });