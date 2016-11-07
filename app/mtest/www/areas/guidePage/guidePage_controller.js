/**
 * Created by Administrator on 2016/11/3.
 */
angular.module('guidePage.controller', ['guidePage.services'])

  .controller('GuidePageCtrl', function($scope,guidePageFty) {
    // 引导页slide初始化
    var guideSlide = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });
    // // 初始换轮播图
    // var swiper = new Swiper('.swiper-container', {
    //   pagination: '.swiper-pagination',
    //   paginationClickable: true,
    //   onSlideChangeEnd: function(swiper){
    //     swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    //   }
    // });
    $scope.func_goHomePage=function () {
     $location.url('/homePage');
    }

  })

