/**
 * Created by Shalom on 3/9/2016.
 */

(function () {

    var module = angular.module('bn.table', []);

    module.controller('tableGradeCtrl', TableGradeCtrl);

    function TableGradeCtrl(DataFactory,TableGradeFactory) {
        var ctrl = this;

        ctrl.list = TableGradeFactory.getAllGradeTables();

        ctrl.table = {
            id: 1,
            name:'Standard-grades',
            grades: [
                {details: '', desc: 'Exellent', grade: 10},
                {details: '', desc: 'Very good', grade: 9},
                {details: '', desc: 'Good', grade: 8},
                {details: '', desc: 'Adequate', grade: 7},
                {details: '', desc: 'Low', grade: 6},
                {details: '', desc: 'Fail', grade: 5}
            ]
        }

        ctrl.submit = function () {
            DataFactory.addTableGrade(ctrl.table);
        }

    }


    module.factory('TableGradeFactory', function (Connections) {
        var gradeTables = {};

        return{
            setGradeTable : function (table) {
                Connections.create(table,'gradeTable',null).then(function (newTable) {
                    gradeTables[newTable.Id] = newTable;
                })
            },
            getGradeTableById : function(id){
                return gradeTables[id];
            },

            getAllGradeTables: function () {
                return gradeTables ;

            }

        }

    })
})();

