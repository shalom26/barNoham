


(function () {

    angular.module('bn.directives')

        .directive('sideBar', function () {
            return {
                transclude: true,
                template: require('./side-bar.html')
            }
        });

})();
