
angular.module('guidePage.route', ['guidePage.controller','homePage.route'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidePage', {//路由页面的名字，可以和下面的url不一样
        url: '/guidePage',
        // abstract: true, 表明此状态不能被显性激活，只能被子状态隐性激活(所以加上这个属性导致切换锚点值页面不改变)
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      })
  });

