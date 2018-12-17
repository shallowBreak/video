"use strict";

//滚动到一定高度显示隐藏
//先获取到猜您喜欢的元素
//就获取到所有标题的元素选第一个
//然后设置滚动事件，判定滚动事件是否大于所在的页面高度
//如果是，就显示，如果不是就隐藏
function scrollPx() {
  //获取元素
  //先获取ul元素和li
  var tnav = $(".Tnavul");
  var tbox = $(".like"); // console.log(tnav)
  // var tbox1=tbox.eq(0);

  $(document).on("scroll", function () {
    // 绝对高度
    var H = tbox.offset().top; // 滚动高度

    var S = $(document).scrollTop();
    var C = $(window).height(); //设置判定条件
    // console.log(C)

    if (S + C >= H) {
      // console.log("显示")
      stop();
      tnav.animate({
        opacity: 'show'
      }, 500);
    } else {
      // console.log("隐藏")
      stop();
      tnav.hide(500);
    }
  });
}

scrollPx(); //设置检测滚动给元素添加样式
//顺便看看能不能把滚动的样式触发下

function onscrolL() {
  //先获取左边的元素
  var Lnav = $(".Tnavul li a"); //获取需要检测的元素

  var mtit = $(".Mtit[id]"); //创建一个数组
  //把获取到的数据放进去

  var arr = []; //遍历一下

  var C = $(window).height();
  var LnavF = $(".Tnavul li"); // console.log(Lnav)
  // 滚动高度

  Lnav.each(function (index) {
    // 绝对高度
    var H = mtit.eq(index).offset().top;
    arr.push(H);
  }); //判定和滚动高度对比如果达到，就改变样式

  $(document).on("scroll", function () {
    var sTop = $(document).scrollTop();
    $(arr).each(function (index) {
      if (sTop + C > arr[index]) {
        Lnav.eq(index).addClass("nav-show");
        LnavF.eq(index).siblings().children().removeClass(); // console.log(Lnav.eq(index).siblings())
      }
    });
    console.log(arr);
  }); // $(Lnav).each(function(index){
  //     Lnav.eq(index).on("click",function(){
  //         $(document).scrollTop(arr[index])
  //     })
  // })
  // console.log()
  // for(var i=0;i<arr.length;i++){
  //     if(S+C>=arr[i]){
  //         console.log("a")
  //     }
  // }
}

onscrolL();