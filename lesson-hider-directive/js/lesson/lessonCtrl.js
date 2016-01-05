angular.module("lessonHider")
    .controller("lessonCtrl", function ($scope) {
        $scope.test = "Lesson Hider";
        $scope.lessons =
        [
            'Services',
            'Routing',
            'Directives',
            'Review',
            'Firebase',
            'No server project',
            'Node',
            'Express',
            'Mongo'
        ];
    });