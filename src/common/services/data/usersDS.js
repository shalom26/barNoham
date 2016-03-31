/*** Created by Shalom on 30/03/2016.*/


(function () {

    angular.module('bn.DS')

        .factory('Users', function (DS) {
            var ctrl = this;
            var usersDS = DS.defineResource({
                name: 'users', type: 'Users', idAttribute: 'id',

            });
            usersDS.findAll().then((users)=> {
                usersDS.inject(users)
            });
            return usersDS;
        })
})();
