/**
 * Created by Shalom on 3/15/2016.
 */
(function () {


    var app = angular.module('bn.modules');

    app.config(function ($translateProvider) {


        $translateProvider.translations('en', {
            hello: 'hello',
            access: 'access'
        });
        $translateProvider.translations('heb', {
            hello: 'שלום',
            access: 'גישה'
        });
        $translateProvider.preferredLanguage('en');

    });

})();

