/**
 * Created by Shalom on 30/03/2016.
 */

(function () {

    angular.module('bn.DS')

        .factory('Languages', function (DS) {
            var ctrl = this;
            var languagesDS = DS.defineResource({
                name: 'languages', type: 'Languages', idAttribute: 'id',

            });
            languagesDS.findAll().then((langs)=> {
                languagesDS.inject(langs)
            });
            return languagesDS;
        })
})();
