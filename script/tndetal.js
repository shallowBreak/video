"use strict";

//详情页跳转
//先将jsonp放在对应的本地存储中
//给每一个图片绑定点击事件，或者加一个按钮点击查看详情
//然后再设置页面跳转，在详情页取出获取到的数据
//渲染页面
//这个其实就是将
function todetail(res) {
  // console.log(res)
  //转换为字符串
  var json = JSON.stringify(res); // 避免重复
  // console.log(json)
  //
  // console.log(json)
  //就当物品已经放进去了吧
  //遵循同源策略
  // console.log(json)

  localStorage.setItem("cart", "[".concat(json, "]"));
  return false; // console.log(localStorage)
  //按钮设置上了，绑定事件
  //这里的绑定需要用到事件函数，
}

$(".container-goodslist").on("click", "#click", handleCarClick);
$(".container-goodslist").on("click", "#comcar", shopingcar);

function handleCarClick(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement;
  var iid = $(target).attr("data-iid"); // var nowMsg = findJson(iid)[0];
  // console.log(iid)
  // addCar(nowMsg,iid);
  //将点击到的id存进去

  localStorage.setItem("name", "[".concat(iid, "]"));
  location.href = "http://localhost:8080/detal.html";
} // 购物车


function shopingcar(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement;
  var iid = $(target).attr("data-name");
  var nowMsg = findJson(iid)[0]; // 将对应的数据拿出来
  // 渲染页面

  $.extend(nowMsg, {
    count: 1
  });
  carrander(nowMsg);
  console.log(nowMsg);
} // 渲染页面


var newarr = [];
var kcar = $(".mycar");

function carrander(arr) {
  var html = ""; // console.log(arrarr)
  // arrarr.forEach(function(arr){

  html += "\n        <div class=\"carmain\">\n            <div class=\"carimg\">\n                <img src=\"".concat(arr.show.img, "\" alt=\"\" srcset=\"\">\n            </div>\n            <div class=\"carbox\">\n                <p class=\"carti\">").concat(arr.title, "</p>\n                <p class=\"carval\">").concat(arr.price, "</p>\n            </div>\n            \n        </div>\n        ");
  console.log(arr);
  kcar.html(kcar.html() + html);
  return html;
}

function findJson(iid) {
  return arr.filter(function (item) {
    return item.iid === iid;
  });
}

function hasIid(aMsg, iid) {
  for (var i = 0; i < aMsg.length; i++) {
    if (aMsg[i].iid === iid) {
      aMsg[i].count++;
      return true;
    }
  }

  return false;
}