(function() {
    'use strict';

    angular
        .module('test')
        .controller('IndexCtrl', IndexCtrl);

    /** @ngInject */
    function IndexCtrl(webDevTecSvc, ShoppingCartSvc) {
        var vm = this;

        // variables
        vm.awesomeThings = [];
        vm.myCart = null;

        // init
        activate();

        ////////////////////////////////////////////////////

        function activate() {
            getWebDevTec();
            vm.myCart = ShoppingCartSvc.getMyShoppingCart();
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTecSvc.getTec();

            _.forEach(vm.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }
})();
