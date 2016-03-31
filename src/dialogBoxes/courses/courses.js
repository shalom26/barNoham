/**
 * Created by Shalom on 2/22/2016.
 */



(function () {


    angular.module('bn.coursesDialog').controller('coursesDialogCtrl', CoursesCtrl);




    function CoursesCtrl($rootScope, $stateParams, DataFactory, $mdDialog, Courses,CurrentProj) {

        var ctrl = this;
        ctrl.newCourse = {name: ''};
        ctrl.selectedCourse = {};
        ctrl.courses = Courses;

        ctrl.selected = [];

        for (var i in ctrl.courses) {
            ctrl.courses[i].on = false;
        }

        if ($stateParams.id) {
            ctrl.currProj = CurrentProj;
            ctrl.currProj.coursesId.forEach(function (courseId) {
                console.log('courseId',courseId);
                ctrl.selected.push(ctrl.courses[courseId]);
                if(courseId) ctrl.courses[courseId].on = true;
            })
        }
        this.DataFactory = DataFactory;
        this.$rootScope = $rootScope;
        this.$mdDialog = $mdDialog;


    }



    CoursesCtrl.prototype.addCourse = function () {
        this.DataFactory.addCourse(ctrl.newCourse);

    };

    CoursesCtrl.prototype.submit = function () {
        console.log('Submit');
        this.$rootScope.$broadcast('courseChange', this.selected);
        this.$mdDialog.hide();
        console.log('ctrl.selecteds', this.selected);
    };

    CoursesCtrl.prototype.selectItem = function (item) {
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
