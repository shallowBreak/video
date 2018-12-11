"use strict";

//我想做这个实现什么？
//显示隐藏轮播图
//获取元素
//然后点击按钮，控制背景色的改变和图片的出现消失
//实现自动播放
//以及鼠标进入进出暂停效果
//怎么实现
//获取所有图片和按钮元素
//绑定点击事件
//切换不同
function Mainbanner() {}

$.extend(Mainbanner.prototype, {
  init: function init() {
    this.mLi = $(".banner li");
    this.Btn = $(".indexBtn");
    this.index = 0;
    this.creatBtn();
  },
  //先渲染按钮
  creatBtn: function creatBtn() {
    // console.log(this.mli)
    for (var i = 0; i < this.mLi.length; i++) {
      var span = $("<span>");
      this.Btn.append(span);
    }

    this.bindEvent();
  },
  // 绑定事件
  bindEvent: function bindEvent() {
    // $('#bar').index(); 
    this.Btn.on("click", "span", this.spanActive).bind(this);
  },
  //改变class名
  //并且获取到对应下标
  spanActive: function spanActive() {
    console.log(this.mLi);
    $(this).addClass("spactive").siblings().removeClass("spactive");
    this.index = $(this).index();
    $(".banner li").eq(this.index).addClass("active").siblings().removeClass("active"); // this.mLi.eq(this.index)
    // this.mLi.eq(index).addClass("active").siblings().removeClass("active")
  } //改变对应下标的class名（图片的）

});
var mainbanner = new Mainbanner();
mainbanner.init();