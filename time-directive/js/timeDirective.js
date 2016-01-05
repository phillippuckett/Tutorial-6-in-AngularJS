angular.module('timeApp')
    .directive('showTime', function () {
        return {
            restrict: 'E',
            template: "<div> Wha's today? Today es {{time}} </div>",
            link: function (scope, element, attributes) {
                var currentTime = new Date();
                scope.time = currentTime.toString();
            }
        }
    });