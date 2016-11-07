/**
 * Created by Administrator on 2016/11/3.
 */

angular.module('homePage.route', ['homePage.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('homePage', {//路由页面的名字，可以和下面的url不一样
        url: '/homePage',
        // abstract: true, 表明此状态不能被显性激活，只能被子状态隐性激活(所以加上这个属性导致切换锚点值页面不改变)
        templateUrl: 'areas/homePage/homePage.html',
        controller: 'HomePageCtrl'
      })
  });

