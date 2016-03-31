/**
 * Created by Shalom on 2/1/2016.
 */
(function () {

    angular.module('bn.sideNavCtrl').controller('sideNavCtrl', sideNavCtrl);


    function sideNavCtrl($http, $scope, $mdSidenav, DataFactory, sideBarData, Projects, Courses) {

        var ctrl = this;
        ctrl.loadChildren = function (node) {
            console.log(node)
        };
        ctrl.isCourseTreeOpen = false;
        ctrl.closeMainTree = true;
        ctrl.coursesTree = sideBarData;

        ctrl.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };
        this.DataFactory = DataFactory;
        this.Projects = Projects;
        this.Courses = Courses;

        ctrl.openCourseTree = function (id) {
            ctrl.isCourseTreeOpen = !ctrl.isCourseTreeOpen;
            ctrl.closeMainTree = !ctrl.closeMainTree;
            Courses.find(id).then(function (course) {
                course.childs = [
                    {
                        id: 1,
                        type: 'syllabus',
                        childs:[  {
                            id: 1,
                            type: 'subject',
                            childs: [{
                                id: 1,
                                type: 'subSubject'
                            }]
                        }]
                    }
                  ,
                    {
                        id: 1,
                        type: 'cycles',
                        childs: [{
                            id: 1,
                            type: 'cycle',
                            childs: [
                                {
                                    id: 1,
                                    type: 'cycleMng'
                                }]
                        }]
                    }
                ];
                ctrl.coursesTree = [];
                ctrl.coursesTree.push(course);
            })

        };

        $scope.$on('projects.updated', function () {
            ctrl.getData();
        });
        ctrl.getData();

        ctrl.treeOptions = {

            nodeChildren: "childs",
            dirSelectable: true,
            multiSelection: false,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            }
        };

    }

    sideNavCtrl.prototype.getData = function () {
        var ctrl = this;
        //this.DataFactory.getProjectsAsArray()
        //    .then(function (res) {
        //        ctrl.projects = res;
        //    });

        ctrl.Projects.findAll().then(function (projects) {
            projects.forEach(function (proj) {
                proj.childs = [];
                if (proj.coursesId) {
                    proj.coursesId.forEach(function (id) {
                        ctrl.Courses.find(id).then(function (course) {
                            course.type = 'course';
                            proj.childs.push(course);
                        })
                    });
                }
                //ctrl.Projects.loadRelations(proj,['courses']);
                proj.type = 'project'

            });
            //ctrl.Projects.bindAll();
            ctrl.projects = projects;
        })
    };


})();
