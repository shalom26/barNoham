/**
 * Created by Shalom on 2/14/2016.
 */
/**
 * Created by Shalom on 2/9/2016.
 */

'use strict';

(function () {

    angular.module('bn.edit')

        .controller('CourseCtrl', function ($scope, $stateParams, DataFactory) {
            var ctrl = this;

           ctrl.currCourse = DataFactory.getCourseById(+$stateParams);

        })

        .controller('CoursesCtrl', function (DataFactory) {

            var ctrl = this;

            DataFactory.getCourses().then(function (courses) {
                ctrl.courses = courses;
            });

            ctrl.delete = function (course) {
                DataFactory.deleteCourse(course)
            }
        })



        .controller('CreateCourseCtrl', function (DataFactory) {

            var ctrl = this;
            ctrl.course = {};


            DataFactory.getCourses().then(function (courses) {
                ctrl.courses = courses;
                var id = ctrl.courses[ctrl.courses.length - 1].id;
                ctrl.course.id = id + 1;
            });
            ctrl.createCourse = function () {
                DataFactory.createCourse(ctrl.course);

            }

        })
})();



