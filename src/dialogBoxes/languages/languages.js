/**
 * Created by Shalom on 2/22/2016.
 */


(function () {

    angular.module('bn.langsDialog').controller('langsCtrl', LangsCtrl);



    function LangsCtrl($rootScope, $stateParams, DataFactory, $mdDialog, Languages,CurrentProj) {


        var ctrl = this;

        ctrl.newLang = {name: ''};
        ctrl.selectedLang = {};
        ctrl.langs = Languages

        ctrl.selected = [];

        for (var i in ctrl.langs) {
            ctrl.langs[i].on = false;
        }

        if ($stateParams.id) {
                ctrl.currProj = CurrentProj;
                ctrl.currProj.languagesId.forEach(function (langId) {
                    ctrl.selected.push(ctrl.langs[langId]);
                    ctrl.langs[langId].on = true;
                })
        }
        this.DataFactory = DataFactory;
        this.$rootScope = $rootScope;
        this.$mdDialog = $mdDialog;


    }



    LangsCtrl.prototype.addLang = function () {
        this.DataFactory.addLang(ctrl.newLang);

    };

    LangsCtrl.prototype.submit = function () {
        this.$rootScope.$broadcast('langChange', this.selected);
        this.$mdDialog.hide();
    };

    LangsCtrl.prototype.selectItem = function (item) {
        // note : called before the ngModel is changed
        if (!item.on) {
            var idx = this.selected.indexOf(item);
            this.selected.splice(idx, 1);
        }
        else {
            this.selected.push(item);
            //item.on = true;
            //var id = ctrl.selected.indexOf(item);
            //ctrl.selected[id].on = false;
        }
    }

})
();

