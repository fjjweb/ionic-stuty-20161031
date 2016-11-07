/**
 * Created by Administrator on 2016/11/3.
 */
angular.module('homePage.controller', ['homePage.services'])

  .controller('HomePageCtrl', function($scope,homePageFty) {
    $scope.doRefresh = function () {
      alert("123");
    };
    $scope.loadMore = function () {

    }
    $scope.moreDataCanBeLoaded = function () {
      return true;
    };
    $scope.radioData = [
      {
        name:"中国",
        value:"China"
      },
      {
        name:"韩国",
        value:"Korea"
      },
      {
        name:"美国",
        value:"America"
      }
    ];
    $scope.choice = {choice:"中国"};
  })
