angular.module("lessonHider")
    .directive("lessonDirective", function () {
        return {
            templateUrl: "js/lesson/lessonTmpl.html",
            restrict: 'E',
            controller: function ($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
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