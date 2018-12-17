"use strict";

function selectList() {} //写选项卡咋做
//一样的


function seclctList() {
  // var index=0;
  $(" .r1 ul li").each(function (index) {
    // if($(this).index==0){      
    //     console.log(this)  
    //     if(index==($(".r1 ul li").length-1)){
    //         index=0;
    //     }
    //     else{
    //         index++;
    //         $(".r1 ul li").eq(index).addClass("on").siblings().removeClass("on");
    //         $(".r2 ul").eq(index).show().siblings().hide();
    //     }
    //     console.log(index)  
    // }
    $(this).mouseover(function () {
      $(".r1 ul li").eq(index).addClass("on").siblings().removeClass("on");
      $(".r2 ul").eq(index).show().siblings().hide();
    });
  });
}

seclctList(); // var seclctList_time=setInterval(function(){
//     seclctList()
// }.bind(this),1000)