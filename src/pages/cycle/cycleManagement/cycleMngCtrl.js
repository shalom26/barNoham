/**
 * Created by Shalom on 2/14/2016.
 */



'use strict';

(function () {

    angular.module('bn.edit')

        .controller('CycleMngCtrl', function ($rootScope, $stateParams, DataFactory, $mdpDatePicker, $mdpTimePicker, $filter, schedFct, dialogService, DS) {
            var ctrl = this;


            ctrl.dayFormat = "d";
            ctrl.selectedDate = [];
            ctrl.firstDayOfWeek = 0;
            ctrl.event = {}
            ctrl.events = schedFct.getAll();


            $rootScope.$watch(function () {
                return ctrl.events
            }, function (newVal) {
                schedFct.inject(newVal)
                console.log('schedFct.setSched(newVal)',newVal);
            });

            ctrl.dayClick = function (date) {
                ctrl.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
                console.log('ctrl.msg', ctrl.msg);
                //MaterialCalendarData.setDayContent(date, "Baba")
            };

            ctrl.addComment = function ($event) {
                var opt = {
                    ctrl: 'calCtrl as vm',
                    temp: 'app/modules/cycle/cycleManagement/addComment.html'

                }

                dialogService.showAdvanced($event, opt)

            };

            $rootScope.$on('calChange', function (event, comment) {
                ctrl.selectedDate.forEach(function (date) {
                    console.log('comment', comment);
                    MaterialCalendarData.setDayContent(date, comment);
                    console.log('MaterialCalendarData', MaterialCalendarData);
                })
                CalFct.setCal(MaterialCalendarData.data);
                ctrl.selectedDate = [];
            });

            ctrl.prevMonth = function (data) {
                ctrl.msg = "You clicked (prev) month " + data.month + ", " + data.year;
            };

            ctrl.showDatePicker = function (ev) {
                $mdpDatePicker(ctrl.currentDate, {
                    targetEvent: ev
                }).then(function (selectedDate) {
                    ctrl.currentDate = selectedDate;
                });
            };

            this.filterDate = function (date) {
                return moment(date).date() % 2 == 0;
            };

            this.showTimePicker = function (ev) {
                $mdpTimePicker(ctrl.currentTime, {
                    targetEvent: ev
                }).then(function (selectedDate) {
                    ctrl.currentTime = selectedDate;
                });
            };


        })
})();



