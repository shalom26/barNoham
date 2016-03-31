/**
 * Created by Shalom on 2/22/2016.
 */

(function () {

    angular.module('bn.factoriesDialog')

        .controller('factsCtrlCRUD', function (DataFactory) {
            var ctrl = this;

            DataFactory.getFactories().then(function (facts) {
                ctrl.facts = facts;
            });

            ctrl.delete = function (fact) {
                DataFactory.deleteFact(fact);
            }
        })

})
();

