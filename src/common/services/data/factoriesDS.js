/**
 * Created by Shalom on 30/03/2016.
 */

(function () {

    angular.module('bn.DS')

        .factory('Factories', function (DS) {
            var ctrl = this;
            var factoriesDS = DS.defineResource({
                name: 'factories', type: 'Factories', idAttribute: 'id',

            });
            factoriesDS.findAll().then((facts)=> {
                factoriesDS.inject(facts)
            });
            return factoriesDS;
        })
})();
