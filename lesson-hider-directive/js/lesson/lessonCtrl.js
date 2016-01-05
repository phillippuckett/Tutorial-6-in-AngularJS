angular.module("lessonHider")
    .controller("lessonCtrl", function ($scope) {
        $scope.test = "Two way binding!";
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