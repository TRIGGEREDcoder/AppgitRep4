(function (angular) {
    'use strict';
    
    angular
        .module('GitApplication')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('login', {
            parent: 'views',
            url: '/login',
            views: {
                'content@': {
                    templateUrl: 'app/views/login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
