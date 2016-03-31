
/**
 * Created by Shalom on 2/2/2016.
 */
(function () {


    var res;

    angular.module('bn.connections')

        .factory('CycleFactory', function (Connections) {
            var factory = {
                get: function () {
                    return Connections.get('cycles');
                },
                getById: function (id) {
                    return Connections.get('cycles',[{"id":id}]);
                },
                remove: function (id) {
                    return Connections.get('cycles',[{"id":id}]);
                },
                add: function (obj) {
                    return Connections.post('cycles',obj);
                },
                update: function (obj) {
                    return Connections.post('cycles',obj);
                }

            };
            return factory;
        })
})();
