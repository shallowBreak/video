"use strict";

// console.log(_);

/** 
 * 
 * 1. 渲染页面;
 * 1.1 发送ajax : jsonp 请求
 * 1.2 拼接字符串渲染页面;
 * 2. 无限加载;
 * 
 * */
// 选择元素;
var container = _(".container-goodslist"); // 发送ajax : jsonp 请求


var GLOBAL = {
  // 可视区的高度;
  ch: document.documentElement.clientHeight,
  // 是否在加载过程之中
  loading_flag: false,
  page: 1
};

_jsonp("https://list.mogujie.com/search").then(function (res) {
  // console.log(res.result.wall.list);
  // 获取商品列表;
  var goodsJSON = res.result.wall.list;
  randomPage(goodsJSON); // 是不是有了所有的 dom 结构那?

  eleSort(container.children); // var gjson=goodsJSON;
  // todetail(goodsJSON)
}); // 渲染页面函数;


var arr = [];

function randomPage(json) {
  // console.log(json)
  var html = ""; // 根据比例计算图片高度;

  json.forEach(function (ele) {
    // console.log(ele);
    html += "   <div class=\"goods-box\">\n                              <div class=\"good-image\">\n                                    <img src=\"".concat(ele.show.img, "\" width=", 262, " height=").concat(parseInt(262 / ele.show.w * ele.show.h), " alt=\"\">\n                              </div>\n                              <div class=\"good-title\">\n                                    <p>").concat(ele.title, "</p>\n                              </div>\n                              <div class=\"line\"></div>\n                              <div class=\"good-detail\">\n                                    <span class=\"detail-price\">\n                                          ").concat(ele.price, "\n                                    </span>\n                                    <div class=\"detail-start\">\n                                          <i>\u2605</i>\n                                          <span>").concat(ele.itemMarks.split(" ")[0], "</span>\n                                    </div>\n                              </div>\n                              <div class=\"clickshop clearfix\">\n                                    <button id=\"click\" data-iid=\"").concat(ele.iid, "\">\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5</button>\n                                    <button id=\"comcar\" data-name=\"").concat(ele.iid, "\">\u52A0\u5165\u8D2D\u7269\u8F66</button>\n                              </div>\n                        </div> "); // console.log(ele)

    arr.push(ele);
  }); // console.log(arr)

  container.innerHTML += html;
  todetail(arr); // console.log(arr)

  return html, arr;
} // 等宽不等高的布局如何处理 ?
// 不用浮动布局;


function eleSort(eles) {
  //以第一排为基准，排列后面所有的元素;
  // 1. 找到第一排的所有元素;
  // 1.1 伪数组转真数组 ;
  // 2. 排列第二排的所有元素;
  // 2.1 建立标准;
  // eles => HTMLcollection ; 不是数组; 所以没有 Array的方法;
  // console.log(Array.prototype.slice.call(eles));
  // 兼容型写法  Array.prototype.slice.call( args ) 把 args 转换成真数组的方法;  === Array.from( args )
  // 标准数组;
  var heightArray = [];
  eles = _slice(eles);
  eles.forEach(function (ele, index) {
    // console.log(ele);
    // 下标截止到3 是第一排。
    // 其余的就是第二排。
    if (index <= 3) {
      // 2.1 建立标准;
      // console.log(ele,"第一排");
      heightArray.push(ele.offsetHeight);
    } else {
      // console.log(ele,"第二排");
      // 排列第二排的东西;
      // 取最小值;
      var min = Math.min.apply(false, heightArray); // 设置定位
      // 设置top; => 数组之中的 最小值;

      ele.style.position = "absolute";
      ele.style.top = min + 20 + "px"; // 设置left值; => 最小值的下标;

      var minIndex = heightArray.indexOf(min);
      ele.style.left = eles[minIndex].offsetLeft - 20 + "px";
      var max = Math.max.apply(false, heightArray); // 最后改变标准数组;

      heightArray[minIndex] += ele.offsetHeight + 20; // 最后改变标准数组;

      var maxIndex = heightArray.indexOf(max);
      container.style.height = heightArray[maxIndex] + "px";
    }
  }); // console.log(heightArray);
  // 让我们的数据可以在外部获取;

  GLOBAL.heightArray = heightArray;
} // 无限加载;
// 到一定的时候就加载 ;
// 什么时候加载 ??
// 1. 定一个标准;
// scrollTop (卷动的高度 ) + clientHeight(可视区高度 )  >= Math.min.apply(heightArray) 最小 top 值;
// 判定可加载;


onscroll = function onscroll() {
  // console.log("页面卷动");
  // isLoad()
  // console.log(isLoad());
  // 如果需要加载, 发起ajax请求;
  if (!isLoad() || GLOBAL.loading_flag) return false; // 开始加载数据;

  GLOBAL.loading_flag = true;
  GLOBAL.page++; // setTimeout( function (){
  //       // console.log("这是一个ajax请求 , 请求成功时的回调函数");
  //       GLOBAL.loading_flag  = false;
  // } , 1000 )

  console.log(GLOBAL.page);

  if (GLOBAL.page == 5) {
    return false;
  }

  _jsonp("https://list.mogujie.com/search?page=" + GLOBAL.page).then(function (res) {
    GLOBAL.loading_flag = false;
    var goodsJSON = res.result.wall.list;
    randomPage(goodsJSON);
    eleSort(container.children);
  });
}; // 决定要不要加载;


function isLoad() {
  // 必要参数不存在 , 判断函数不执行。
  if (GLOBAL.heightArray === undefined) return false;
  var st = document.body.scrollTop || document.documentElement.scrollTop;
  var mh = Math.min.apply(false, GLOBAL.heightArray); // console.log(ch,st, mh);

  if (GLOBAL.ch + st >= mh - 800) {
    return true;
  } else {
    return false;
  }
} // 合并json


var a = [];
var b = {
  name: "l"
};
var c = {
  name: "2"
};
var d = a.push(b);
console.log(d);