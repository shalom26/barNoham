/**
 * Created by Shalom on 3/1/2016.
 */
(function () {


    var module = angular.module('bn.project');

    module.controller('ProjEditCtrl', function ($rootScope, $scope, DataFactory, dialogService, $stateParams, projFactory, Costumers, Projects, Courses, Languages, Factories) {
        var ctrl = this;
        ctrl.langs = [];
        ctrl.factories = [];
        ctrl.users = [];

        var prmProject = Projects.find(+$stateParams.id);
        prmProject.then((proj) => {
            ctrl.currProj = proj;
            console.log(' ctrl.currProj', ctrl.currProj);

            Courses.find(ctrl.currProj.coursesId).then((res) => {
                ctrl.courses = res;
            });
            ctrl.currProj.languagesId.forEach((id)=> {
                ctrl.langs.push(Languages.get(id));
            });

            Costumers.find(ctrl.currProj.costumerId).then((res)=> {
                ctrl.costumer = res;
                console.log('ctrl.costumer1234', ctrl.costumer);
            });

            ctrl.currProj.factoriesId.forEach((id)=> {
                ctrl.factories.push(Factories.get(id));
            });
        });


        $scope.$on('langChange', function (event, newLangs) {
            ctrl.currProj.languagesId = [];
            for (var i in newLangs) {
                ctrl.currProj.languagesId.push(newLangs[i].id);
            }
            ctrl.langs = newLangs;
        });

        $scope.$on('factChange', function (event, newFacts) {
            ctrl.currProj.factoriesId = [];
            for (var i in newFacts) {
                ctrl.currProj.factoriesId.push(newFacts[i].id)
            }
            ctrl.factories = newFacts;
            //DataFactory.updateProj(ctrl.currProj)
        });

        $scope.$on('courseChange', function (event, newCourses) {
            ctrl.currProj.coursesId = [];
            for (var i in newCourses) {
                ctrl.currProj.coursesId.push(newCourses[i].id)
            }
            ctrl.courses = newCourses;
            //DataFactory.updateProj(ctrl.currProj)
        });

        $scope.$on('userChange', function (event, newUser) {
            ctrl.users.push(newUser);
        });


        $scope.$on('costChange', function (event, newCost) {
            console.log('newCost', newCost);
            ctrl.costumer = newCost;
            ctrl.currProj.costumerId = newCost.id;
        });


        ctrl.updateProj = ()=> {
            Projects.update(ctrl.currProj);
        };
        ctrl.cancel = ()=> {
            ctrl.currProj = ctrl.tempProj;
        };

        $scope.$watch(()=> {
            return ctrl.currProj
        }, (newVal, oldVal)=> {
            ctrl.currProj = newVal;
        }, true);


//get costumers data
        ctrl.costumer = projFactory.getCostumer();


//buttons fnc
        ctrl.showFactories = function ($event) {
            dialogService.showFactories($event)
        };

        ctrl.showCostumers = function ($event) {
            dialogService.showCostumers($event)
        };

        ctrl.showLanguages = function ($event) {
            dialogService.showLanguages($event)
        };

        ctrl.showUsers = function ($event) {
            dialogService.showUsers($event)
        };

        ctrl.showCourses = function ($event) {
            dialogService.showCourses($event)
        }
    });

})();

