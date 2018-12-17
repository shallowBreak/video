"use strict";

function selectList1() {
  // 我要实现什么功能
  //点击切换显示隐藏显示
  // 先获取元素
  //然后设定判定是否显示
  //如果是，就隐藏
  // 如果是隐藏状态就显示
  var nu = true;
  $(".more").on("click", function () {
    if (nu) {
      $(".like ul").each(function (index) {
        $(".like ul").eq(index).show().siblings("ul").hide();
      });
      nu = false;
    } else {
      // console.log("a")
      $(".like ul").each(function (index) {
        $(".like ul").eq(index).hide().siblings("ul").show();
      });
      nu = true;
    } // console.log(nu)

  }); // $(".like ul").each(function(index){
  // $(".r1 ul li").eq(index).addClass("on").siblings().removeClass("on");
  // $(".r2 ul").eq(index).show().siblings().hide();
  // })
}

selectList1();