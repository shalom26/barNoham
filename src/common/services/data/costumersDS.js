/**
 * Created by Shalom on 30/03/2016.
 */

(function () {

    angular.module('bn.DS')

        .factory('Costumers', function (DS) {
            var ctrl = this;
            var costumersDS = DS.defineResource({
                name: 'costumers', type: 'Costumer', idAttribute: 'id',

            });
            costumersDS.findAll().then((costumers)=>{
                costumersDS.inject(costumers)
            });
            return costumersDS;
        })
})();
