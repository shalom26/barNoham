/**
 * Created by Shalom on 3/20/2016.
 */

(function () {
    angular.module('bn.modules')

        .factory('schedFct', function (DS) {
            var ctrl = this;
            var Schedule = DS.defineResource({name: 'schedule', idAttribute: 'id'});

            Schedule.inject([
                {id: 1, text: "Meeting", start_date: "03/11/2016 14:00", end_date: "03/11/2016 17:00"},
                {id: 2, text: "Meeting", start_date: "03/15/2016 14:00", end_date: "03/15/2016 17:00"},
                {id: 3, text: "Meeting", start_date: "03/17/2016 14:00", end_date: "03/17/2016 17:00"}]);

            return Schedule;
        })
})();
