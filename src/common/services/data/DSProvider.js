/**
 * Created by Shalom on 28/03/2016.
 */


(function () {

    angular.module('bn.config')
        .config(function (DSProvider, DSHttpAdapterProvider) {
            angular.extend(DSProvider.defaults,{} );
            angular.extend(DSHttpAdapterProvider.defaults, {basePath : '/api'});
        });
})();