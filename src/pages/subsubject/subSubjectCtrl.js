/**
 * Created by Shalom on 2/14/2016.
 */


'use strict';

(function () {

    angular.module('bn.edit')

        .controller('SubSubjectCtrl', function ($stateParams, DataFactory, $mdpDatePicker, $mdpTimePicker) {
            var ctrl = this;

            ctrl.startDate = '';
            ctrl.endDate = '';

            ctrl.numStudentsSelected = 5;
            ctrl.numGroupsSelected = 1;

            ctrl.tasks = [
                {id: 1, name: 'baba', percentage: 100},
                {id: 2, name: 'gil', percentage: 100},
                {id: 3, name: 'ball', percentage: 100},
                {id: 4, name: 'round', percentage: 100},
            ]


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


            ctrl.addTheoryDay = function (day) {
                if (day.on) {
                    var idx = this.theroyDaysSel.indexOf(day);
                    ctrl.theroyDaysSel.splice(idx, 1);
                }
                else {
                    ctrl.theroyDaysSel.push(day);

                }
                console.log('ctrl.theroyDaysSel', ctrl.theroyDaysSel);
            }


            ctrl.addPractDay = function (day) {
                if (day.on) {
                    var idx = this.practDaysSel.indexOf(day);
                    ctrl.practDaysSel.splice(idx, 1);
                }
                else {
                    ctrl.practDaysSel.push(day);

                }
                console.log('ctrl.practDaysSel', ctrl.practDaysSel);
            }


        })
})();



