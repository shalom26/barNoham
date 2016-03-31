/**
 * Created by Shalom on 2/14/2016.
 */


'use strict';

(function () {

    angular.module('bn.edit')

        .controller('SubjectCtrl', function ($stateParams, DataFactory, $mdpDatePicker, $mdpTimePicker) {
            var ctrl = this;

            ctrl.startDate = '' ;
            ctrl.endDate = '';

            ctrl.numStudentsSelected = 5;
            ctrl.numGroupsSelected = 1;

            ctrl.theroyDaysSel = [];
            ctrl.practDaysSel = [];
            ctrl.thoeDays = [
                {name: 'Sun', on: false},
                {name: 'Mon', on: false},
                {name: 'Tue', on: false},
                {name: 'Wed', on: false},
                {name: 'Thu', on: false},
                {name: 'Fri', on: false},
                {name: 'Sat', on: false}
            ];

            ctrl.practDays = [
                {name: 'Sun', on: false},
                {name: 'Mon', on: false},
                {name: 'Tue', on: false},
                {name: 'Wed', on: false},
                {name: 'Thu', on: false},
                {name: 'Fri', on: false},
                {name: 'Sat', on: false}
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
            //ctrl.addTheoryDay = function (day) {
            //    ctrl.theroyDaysSel.push(day);
            //    console.log('ctrl.theroyDaysSel');
            //
            //};


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



