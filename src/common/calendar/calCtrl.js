/**
 * Created by Shalom on 3/20/2016.
 */


(function () {
    angular.module('bn.schedule')
        .controller('calCtrl', function ($rootScope) {
            var ctrl = this;
            ctrl.comment = 'bana';

            ctrl.submit = function () {

                    $rootScope.$broadcast('calChange', ctrl.comment);
                    console.log('calSubmit', ctrl.comment);


            }
        })


})();