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
            controller: function ($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
            link: function (scope, element, attributes) {
                scope.getSchedule.then(function (response) {
                    scope.schedule = response.data;
                    // console.log(scope.schedule.length);
                        for (var i = 0; i < scope.schedule.length; i++) {
                            // console.log(scope.lesson);
                            if (scope.schedule[i].lesson === scope.lesson) {
                                console.log(scope.lesson);
                                element.css('text-decoration', 'line-through');
                            }
                        }
                });
            }
        }
    });