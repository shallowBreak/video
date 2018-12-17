"use strict";

//跳转过来了该怎么做
//转换数据
// 获取所有本地数据
var lojson = localStorage.cart; //转为为json

var cjson = JSON.parse(lojson);
console.log(cjson); // 拿到获取过来的id

var cid = localStorage.name; //处理一下cid,

var cl = cid.length - 2; // .substr(n,m)

var newcid = cid.substr(1, cl); // console.log(newcid)
//选取到对应数据

var Marr = $(cjson[0]);
var myjson = Marr.each(function (index, item) {
  // console.log(item.iid)
  if (item.iid == newcid) {
    console.log(item);
    randomPage(item);
  }
}); //渲染页面

function randomPage(json) {
  var html = "";
  var ele = json;
  html += "   <div class=\"detalbox clearfix\">\n                    <div class=\"imgbox\">\n                            <img src=\"".concat(ele.show.img, "\" width=", 262, " height=").concat(parseInt(262 / ele.show.w * ele.show.h), " alt=\"\">\n                    </div>\n                    \n                    \n                    <div class=\"datalcot clearfix\">\n\n                            <div class=\"dataltit\">\n                                    <p>").concat(ele.title, "</p>\n                            </div>\n                            <div class=\"datat\">\n                                <p>\u4E3B\u8981\u4FE1\u606F\uFF1A").concat(ele.props, "</p>\n                            </div>\n                            <div class=\"nowval cl\">\n                                <i>\u2605</i>\n                                <span>\u539F\u4EF7").concat(ele.itemMarks.split(" ")[0], "</span>\n                            </div>\n                            <div class=\"nowval\">\n                                \u73B0\u4EF7").concat(ele.price, "\n                            </div>\n                           \n                            <div class=\"clickshop clearfix nowval\">\n\n                                <button id=\"comcar\" class=\"nr\">\u52A0\u5165\u8D2D\u7269\u8F66</button>\n                            </div>\n                    </div>\n                    \n                </div> ");
  $(".container-goodslist").html(html);
  localStorage.clear();
}