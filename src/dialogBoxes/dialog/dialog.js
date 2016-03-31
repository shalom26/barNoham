(function () {
    'use strict';


    angular.module('bn.dialog')

        .factory('dialogService', function ($mdDialog, $mdMedia) {

            var ctrl;

            function DialogController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            }

            var factory = {

                showAdvanced: function (ev, ctrl) {
                    ctrl.status = '  ';
                    ctrl.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

                    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && ctrl.customFullscreen;
                    $mdDialog.show({
                            controller: ctrl.ctrl,
                            template: ctrl.temp,
                            resolve: ctrl.resolve,
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: true,
                            fullscreen: useFullScreen
                        })
                        .then(function (answer) {
                            ctrl.status = 'You said the information was "' + answer + '".';
                        }, function () {
                            ctrl.status = 'You cancelled the dialog.';
                        });


                },

                showFactories: function ($event) {
                    var opt = {
                        temp: require('../factories/factories.html'),
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
                    this.showAdvanced($event, opt);
                },

                showCostumers: function ($event) {
                    var opt = {
                        temp: require('../costumers/costumers.html'),
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
                    this.showAdvanced($event, opt);
                },

                showLanguages: function ($event) {
                    var opt = {
                        temp: require('../languages/languages.html'),
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
                    this.showAdvanced($event, opt);
                },

                showUsers: function ($event) {
                    var opt = {
                        temp: require('../users/users.html'),
                        ctrl: 'usersCtrl as vm',
                        resolve: {
                            Users: function (DataFactory) {
                                return DataFactory.getUsers();
                            },
                            CurrentProj: function (DataFactory, $stateParams) {
                                return DataFactory.getProjectById($stateParams.id)
                            }
                        }
                    };
                    this.showAdvanced($event, opt);
                },
                showCourses: function ($event) {
                    var opt = {
                        temp: require('../courses/courses.html'),
                        ctrl: 'coursesDialogCtrl as vm',
                        resolve: {
                            Courses: function (DataFactory) {
                                return DataFactory.getCourses();
                            },
                            CurrentProj: function (DataFactory, $stateParams) {
                                return DataFactory.getProjectById($stateParams.id)
                            }
                        }
                    };
                    this.showAdvanced($event, opt);
                }
            };
            return factory
        });

})();