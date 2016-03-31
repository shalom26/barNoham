/**
 * Created by Shalom on 2/4/2016.
 */
/**
 * Created by Shalom on 1/31/2016.
 */
'use strict';


(function () {

    angular.module('bn.idbCrud')
        .controller('indexedDBCtrl', function (IndexedDBFactory, ProjectsFactory, $indexedDB , $scope) {
            var ctrl = this;

            $indexedDB.openStore('projects', function (store) {
                store.getAllKeys().then(function (keys) {
                    ctrl.keys = keys;


                });

            });
            $indexedDB.openStore('projects', function (store) {
                store.getAll().then(function (projs) {
                    projs.forEach(function(proj,index){
                        proj.key = ctrl.keys[index]
                    })
                    ctrl.projects = projs;


                });

            });

            ctrl.delete = function (id) {
                IndexedDBFactory.deleteProject(id);
            }

        });


})


();


