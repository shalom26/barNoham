


(function () {

    angular.module('bn.directives')

        .directive('dialogBox', function (connFactory) {
            return {
                transclude: true,
                templateUrl: 'app/directives/dialog/dialog.html',
                link: function () {


                }
            }
        });

})();


