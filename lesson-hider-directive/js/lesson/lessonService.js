angular.module("lessonHider")
    .service("lessonService", function () {
        this.getSchedule = function () {
            return $http.get('schedule.json');
        }
    });