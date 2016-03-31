
(function () {

    var module = angular.module('bn.project');

    module.factory('projFactory', function (DataFactory, dialogService) {
        var ctrl = this;
        ctrl.proj = {};
        ctrl.proj.langs = [];
        ctrl.proj.langsId = [];
        ctrl.proj.costumer = {};

        return {
            checkOn: function () {
                ctrl.proj.langs.forEach(function (lang) {
                    DataFactory.setLangById(lang);
                })
            },
            getProj: function () {
                return ctrl.proj;
            },
//costumer data
            setCost: function (cost) {
                ctrl.proj.costumer = cost;
            },

            getCostumer: function () {
                return ctrl.proj.costumer;
            },

//languages data
            getLanguages: function () {
                return ctrl.proj.langs;
            },
            setLangs: function (langs) {
                ctrl.proj.langs = langs;


            },
//buttons fnc
            showFactories: function ($event) {
                var opt = {
                    temp: 'app/dialogBox/factories/factories.html',
                    ctrl: 'fctCtrl as vm',
                    resolve: {
                        Factories: function (DataFactory) {
                            return DataFactory.getFactories();
                        },
                        CurrentProj: function (DataFactory, $stateParams) {
                            return DataFactory.getProjectById($stateParams.id)
                        }
                    }
                };
                dialogService.showAdvanced($event, opt);
            },

            showCostumers: function ($event) {
                var opt = {
                    temp: 'app/dialogBox/costumers/costumers.html',
                    ctrl: 'costCtrl as vm',
                    resolve: {
                        Costumers: function (DataFactory) {
                            return DataFactory.getCostumers();
                        },
                        CurrentProj: function (DataFactory, $stateParams) {
                            return DataFactory.getProjectById($stateParams.id)
                        }
                    }
                };
                dialogService.showAdvanced($event, opt);
            },

            showLanguages: function ($event) {
                var opt = {
                    temp: 'app/dialogBox/languages/languages.html',
                    ctrl: 'langsCtrl as vm',
                    resolve: {
                        Languages: function (DataFactory) {
                            return DataFactory.getLanguages();
                        },
                        CurrentProj: function (DataFactory, $stateParams) {
                            return DataFactory.getProjectById($stateParams.id)
                        }
                    }
                };
                dialogService.showAdvanced($event, opt);
            },

            showUsers: function ($event) {
                var opt = {
                    temp: 'app/dialogBox/users/users.html',
                    ctrl: 'usersCtrl as vm',
                    resolve: {
                        Users: function (DataFactory) {
                            return DataFactory.getUsers();
                        },
                        CurrentProj: function (DataFactory, $stateParams) {
                            return DataFactory.getProjectById($stateParams.id)
                        }
                    }
                }
                dialogService.showAdvanced($event, opt);
            },
            showCourses: function ($event) {
                var opt = {
                    temp: 'app/dialogBox/courses/courses.html',
                    ctrl: 'coursesDialogCtrl as vm',
                    resolve: {
                        Courses: function (DataFactory) {
                            return DataFactory.getCourses();
                        },
                        CurrentProj: function (DataFactory, $stateParams) {
                            return DataFactory.getProjectById($stateParams.id)
                        }
                    }
                }
                dialogService.showAdvanced($event, opt);
            }
        }
    })
})();
