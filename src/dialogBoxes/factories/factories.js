(function () {



    angular.module('bn.factoriesDialog', []).controller('fctCtrl', FctCtrl);

    function FctCtrl($rootScope, $mdDialog, DataFactory, $stateParams, CurrentProj, Factories) {
        var ctrl = this;

        ctrl.facts = Factories;

        ctrl.selected = [];

        for (var i in ctrl.facts) {
            ctrl.facts[i].on = false;
        }
        if (CurrentProj) {
            ctrl.currProj = CurrentProj;
            ctrl.currProj.factoriesId.forEach(function (factId) {
                ctrl.selected.push(ctrl.facts[factId]);
                ctrl.facts[factId].on = true;
            })
        }


        ctrl.newFact = {};

        this.$mdDialog = $mdDialog;
        this.DataFactory = DataFactory;
        this.$stateParams = $stateParams;
        this.$rootScope = $rootScope;


    }

    FctCtrl.prototype.addFact = function () {
        this.DataFactory.addFact(this.newFact);

    };

    FctCtrl.prototype.submit = function () {
        this.$rootScope.$broadcast('factChange', this.selected);
        this.$mdDialog.hide();
        console.log('ctrl.selecteds', this.selected);
        console.timeEnd('time');
    };

    FctCtrl.prototype.selectItem = function (item) {
        if (!item.on) {
            this.selected.push(item);
            var id = this.selected.indexOf(item);
            this.selected[id].on = false;
            console.log('ctrl.selected[id]', this.selected[id]);
        }
        else {
            var id = this.selected.indexOf(item);
            this.selected.splice(id, 1);
            console.log('ctrl.selected[id]', this.selected[id]);

        }
    }


})
();
