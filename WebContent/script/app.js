var myApp = angular.module('lx-app',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('welcome');

    $stateProvider
        //欢迎页面
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html'
        })
        //权限管理
        .state('authority/querymenu',{
            url: '/authority/querymenu',
            templateUrl: 'views/querymenu.html'
        })
        .state('authority/queryrole',{
            url: '/authority/queryrole',
            templateUrl: 'views/queryrole.html'
        })
        .state('authority/queryusers',{
            url: '/authority/queryusers',
            templateUrl: 'views/queryusers.html'
        })
        //会员管理
        .state('vip/queryvip',{
            url: 'vip/queryvip',
            templateUrl: 'views/queryvip.html'
        })
        .state('vip/state',{
            url: 'vip/state',
            templateUrl: 'views/state.html'
        })
        .state('vip/search',{
            url: 'vip/search',
            templateUrl: 'views/search.html'
        });
});

