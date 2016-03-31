'use strict';

// Declare app level module which depends on views, and components

var angular = require('angular');
    
angular.module('bn.config').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
            url: "/home",
            template: require('../pages/home/home.html'),
            controller: 'HomeCtrl as vm'
        })

        .state('about', {
            url: "/about",
            template: require('../pages/about/about.html')
        })
        .state('indexedDB', {
            url: "/idb",
            template: require("../pages/IDB-crud/idb.html"),
            controller: 'indexedDBCtrl as vm'
        })

        .state('projects', {
            url: "/projects",
            template: require("../pages/project/projects.html"),
            controller: 'ProjsCtrl as vm'
        })
        .state('project', {
            url: "/project/:id",
            template: require("../pages/project/project.html"),
            controller: 'ProjCtrl as vm'
        })
        .state('editProject', {
            url: "/editProject/:id",
            template: require("../pages/project/editProject.html"),
            controller: 'ProjEditCtrl as vm'
        })

        .state('createProject', {
            url: "/createProject",
            template: require("../pages/project/createProject.html"),
            controller: 'CreateProjCtrl as vm'
        })

        .state('course', {
            url: "/course/:id",
            template: require("../pages/course/course.html"),
            controller: 'CourseCtrl as vm'
        })

        .state('courses', {
            url: "/courses",
            template: require("../pages/course/courses.html"),
            controller: 'CoursesCtrl as vm'
        })
        .state('editCourse', {
            url: "/editCourse/:id",
            template: require("../pages/course/editCourse.html"),
            controller: 'EditCourseCtrl as vm'
        })

        .state('createCourse', {
            url: "/createCourse",
            template: require("../pages/course/createCourse.html"),
            controller: 'CreateCourseCtrl as vm'
        })

        .state('cycle', {
            url: "/cycle/:id",
            template: require("../pages/cycle/cycle.html"),
            controller: 'CycleCtrl as vm'
        })
        .state('cycleMng', {
            url: "/cycleMng/:id",
            template: require("../pages/cycle/cycleManagement/cycleMng.html"),
            controller: 'CycleMngCtrl as vm'
        })

        .state('subject', {
            url: "/subject/:id",
            template: require('../pages/subject/subject.html'),
            controller: 'SubjectCtrl as vm'
        })

        .state('subSubject', {
            url: "/subSubject/:id",
            template: require('../pages/subSubject/subSubject.html'),
            controller: 'SubSubjectCtrl as vm'
        })


        .state('costumers', {
            url: "/costumers",
            template: require("../dialogBoxes/costumers/costumersCRUD.html"),
            controller: 'costCtrlCRUD as vm'
        })

        .state('factories', {
            url: "/factories",
            template: require("../dialogBoxes/factories/factoriesCRUD.html"),
            controller: 'factsCtrlCRUD as vm'
        })

        .state('validation', {
            url: "/validation",
            template: require("../pages/course/validation/validation.html"),
            controller: 'ValidCtrl as vm'
        })

        .state('tableGrades', {
            url: "/table-grades",
            template: require("../pages/tableOfGrades/tableOfGrades.html"),
            controller: 'tableGradeCtrl as vm'
        });



    $urlRouterProvider.otherwise('home');
});
