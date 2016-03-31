/**
 * Created by Shalom on 28/03/2016.
 */


(function () {

    angular.module('bn.DS')

        .factory('Projects', function (DS) {
            var ctrl = this;
            var projectsDS = DS.defineResource({
                name: 'projects', type: 'Project', idAttribute: 'id',
                //relations: {
                //    hasMany: {
                //        courses: {
                //            localField:'coursesId',
                //            localKey:'id',
                //         //   foreignKey:'projectId'
                //        }
                //    }
                //}
            });

            return projectsDS;
        })
})();
