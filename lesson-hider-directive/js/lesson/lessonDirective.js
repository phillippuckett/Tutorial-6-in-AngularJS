angular.module("lessonHider")
    .directive("lessonDirective", function () {
        return {
            templateUrl: "js/lesson/lessonTmpl.html",
            restrict: 'E',
            scope: {
                lesson: "=",
                dayAlert: "&"
                // twoWayDataBinding: '=',
                // stringBinding: '@',
                // functionBinding: '&'
            },
            controller: function ($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
            link: function (scope, element, attributes) {
                scope.getSchedule.then(function (response) {
                    scope.schedule = response.data;
                    for (var i = 0; i < scope.schedule.length; i++) {
                        if (scope.schedule[i].lesson === scope.lesson) {
                            scope.lessonDay = scope.schedule[i].weekday;
                            element.css('text-decoration', 'line-through');
                            return;
                        }
                    }
                });
            }
        }
    });