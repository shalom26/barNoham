/**
 * Created by Shalom on 2/9/2016.
 */

'use strict';

(function () {

    var module = angular.module('bn.project');


    module.controller('ProjsCtrl', function ($scope, DataFactory) {
        var ctrl = this;
        DataFactory.getProjects().then(function (projects) {
            ctrl.projects = projects
        });
        ctrl.delete = function (proj) {
            DataFactory.deleteProj(proj);

        }
    });

    module.controller('ProjCtrl', function (DataFactory, $stateParams, projFactory) {

        var ctrl = this;

        var prmProject = DataFactory.getProjectById(+$stateParams.id);
        prmProject.then(function (proj) {
            ctrl.currProj = proj;
            DataFactory.getLangsById(ctrl.currProj.languagesId).then(function (langs) {
                ctrl.langs = langs;
            })

            DataFactory.getFactsById(ctrl.currProj.factoriesId).then(function (facts) {
                ctrl.facts = facts ;

            })

        });
    });


})();



