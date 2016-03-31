/**
 * Created by Shalom on 2/2/2016.
 */
(function () {
    var user = {
        name: '',
        password: ''
    };
    var res;

    angular.module('bn.connections')

        .factory('CourseFactory', function (Connections) {
            var factory = {
                get: function () {
                    return Connections.get('courses');
                },
                getById: function (id) {
                    return Connections.get('courses',[{"id":id}]);
                },
                remove: function (id) {
                    return Connections.get('courses',[{"id":id}]);
                },
                add: function (obj) {
                    return Connections.post('course',obj);
                },
                update: function (obj) {
                    return Connections.post('course',obj);
                }

            };
            return factory;
        })
})();
