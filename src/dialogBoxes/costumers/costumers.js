/**
 * Created by Shalom on 2/21/2016.
 */



(function () {


    angular.module('bn.costumersDialog').controller('costCtrl', CostCtrl);


    function CostCtrl($rootScope, $stateParams, DataFactory, $mdDialog , Costumers, CurrentProj) {

        var ctrl = this;
        ctrl.selected;
        ctrl.costumers = Costumers;

        if ($stateParams.id) {
                ctrl.currProj = CurrentProj;
                if (ctrl.currProj.costumerId) {
                    ctrl.costumers[ctrl.currProj.costumerId].on = true;
                    ctrl.selected = ctrl.costumers[ctrl.currProj.costumerId];
                    ctrl.selected.on = true ;
                }
        }

        this.newCost = {};
        this.selected = '';
        this.DataFactory = DataFactory;
        this.$rootScope = $rootScope;
        this.$mdDialog = $mdDialog;
    }


    CostCtrl.prototype.addCost = function () {
        this.DataFactory.addCostumer(this.newCost);
    };

    CostCtrl.prototype.submit = function () {
        this.$rootScope.$broadcast('costChange', this.selected);
        this.$mdDialog.hide();
        //console.log('ctrl.selecteds', ctrl.selected);
    };

})
();
