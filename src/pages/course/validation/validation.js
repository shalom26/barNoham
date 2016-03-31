/**
 * Created by Shalom on 3/7/2016.
 */

(function () {
    var module = angular.module('bn.validation', []);
    module.controller('ValidCtrl', ValidCtrl);

    function ValidCtrl(DataFactory) {
        var ctrl = this;
        DataFactory.getFactories().then(function (res) {
            ctrl.currList = res;
        })
    }
})();
