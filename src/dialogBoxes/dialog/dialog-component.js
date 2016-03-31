/**
 * Created by Shalom on 2/18/2016.
 */



(function () {
    'use strict';

    var module = angular.module('bn.directives');

    module.component('dialog', {
        bindings: {
            type: '='
        },
        controller: function () {
            var ctrl = this;

            this.showAdvanced = function ($event) {
                dialogService.showAdvanced($event, ctrl);
            }
        },
        controllerAs: 'something',
        templateUrl: function ($element, $attrs) {
            // access to $element and $attrs
            return [
                'app/directives/',
                $attrs.type,
                '/',
                $attrs.type,
                '.html'
            ].join('')
        }

    })

})();