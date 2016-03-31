/**
 * Created by Shalom on 2/22/2016.
 */

(function () {

    angular.module('bn.costumersDialog')

        .controller('costCtrlCRUD', function (DataFactory) {
            var ctrl = this ;

            ctrl.costumers = DataFactory.getCostumers();

            ctrl.delete = function (cost) {
                console.log(' ctrl.costumers', ctrl.costumers);
                DataFactory.deleteCostumer(cost);
            }


        })

})
();

