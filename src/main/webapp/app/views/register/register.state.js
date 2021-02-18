(function (angular) {
    'use strict';
    
    angular
        .module('GitApplication')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('register', {
            parent: 'views',
            url: '/register',
            views: {
                'content@': {
                    templateUrl: 'app/views/register/register.html',
                    controller: 'registerController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
