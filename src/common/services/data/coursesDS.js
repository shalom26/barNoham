/**
 * Created by Shalom on 28/03/2016.
 */


(function () {

    angular.module('bn.DS')

        .factory('Courses', function (DS) {
            var ctrl = this;
            var coursesDS = DS.defineResource({
                name: 'courses', idAttribute: 'id'
                //relations: {
                //    belongsTo: {
                //        projects: {
                //          //  localField: 'projectId',
                //            foreignKey:'coursesId',
                //            localKey: 'id'
                //        }
                //    }
                //}
            });

            return coursesDS;
        })
})();
