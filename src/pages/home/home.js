'use strict';



(function () {

    angular.module('bn.home', [])

        .controller('HomeCtrl', function (dialogService, $translate, md5) {

            var ctrl = this;
            ctrl.name = '';
            ctrl.password;
            var hashName;
            var hashPassword;

            this.submit = function () {
                hashName = md5.createHash(ctrl.name || '');
                hashPassword = md5.createHash(ctrl.password || '');
                console.log('hashName',hashName);
                console.log('hashPassword',hashPassword);

            };
        });
})();



