(function () {

    angular.module('bn.dialog').controller('usersCtrl', UsersCtrl);


    function UsersCtrl($rootScope, $stateParams, DataFactory, $mdDialog, Users) {


        var ctrl = this;

        ctrl.newUser = {name: ''};
        ctrl.selectedUsers = {};
        ctrl.users = Users.getAll();

        ctrl.selected = [];

        for (var i in ctrl.users) {
            ctrl.users[i].on = false;
        }

        if ($stateParams.id) {
            ctrl.currProj = CurrentProj;
            ctrl.currProj.users.forEach(function (userId) {
                ctrl.selected.push(ctrl.langs[userId]);
                ctrl.users[userId].on = true;
            })
        }
        this.DataFactory = DataFactory;
        this.$rootScope = $rootScope;
        this.$mdDialog = $mdDialog;


    }


    UsersCtrl.prototype.addUser = function () {
        this.Users.create(ctrl.newUser);

    };

    UsersCtrl.prototype.submit = function () {
        this.$rootScope.$broadcast('userChange', this.selected);
        this.$mdDialog.hide();
    };

    UsersCtrl.prototype.selectItem = function (item) {
        // note : called before the ngModel is changed
        if (!item.on) {
            var idx = this.selected.indexOf(item);
            this.selected.splice(idx, 1);
        }
        else {
            this.selected.push(item);

        }
    }

})
();

