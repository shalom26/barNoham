/**
 * Created by Shalom on 3/7/2016.
 */
(function () {
    var module = angular.module('bn.edit');

    module.controller('EditCourseCtrl', function ($stateParams, DataFactory) {

        var ctrl = this;

        ctrl.grades = [5, 6, 7, 8, 9, 10];
        ctrl.students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        ctrl.grade;
        ctrl.minAttPrec = [50, 60, 70, 80, 90, 100];
        ctrl.minNumStudent = 1;
        ctrl.maxNumStudent = 15;
        ctrl.minCourseHours = 1;
        ctrl.traningMtrlInst = '';
        ctrl.traningMtrlStd = '';


        //    var promis = DataFactory.getCourseById($stateParams);
        //    promis.then(function (res) {
        //       ctrl.currCourse = res ;
        //    });
        //    ctrl.updateCourse = function () {
        //        DataFactory.updateCourse(ctrl.currCourse);
        //    }
    })


})();

