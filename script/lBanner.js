"use strict";

function Lbanner() {}

$.extend(Lbanner.prototype, {
  init: function init() {
    this.box = $(".lbanner-img");
    this.img = this.box.children();
    this.tBtn = $(".lbtnl");
    this.bBtn = $(".lbtnr");
    this.lbBox = $(".lbanner-box");
    this.imgheight = this.img.eq(0).height();
    this.index = 0;
    this.boxTop = this.box.position().top;
    this.bindEvent();
  },
  bindEvent: function bindEvent() {
    this.tBtn.click($.proxy(this.bottomEvent, this)); // this.bBtn.on("click",this.bottomEvent());

    this.autoPlay();
    this.lbBox.mouseenter($.proxy(this.stopPlay, this));
    this.lbBox.mouseleave($.proxy(this.autoPlay, this));
    this.bBtn.click($.proxy(this.topEvent, this));
  },
  topEvent: function topEvent() {
    //现在的目的是获取到元素的定位，
    // $("p:last").offset({ top: 10, left: 30 });
    //    console.log(this.boxTop)
    if (this.index == this.img.length - 1) {
      this.index = 1;
      this.box.css({
        top: 0
      });
    } else {
      this.index++;
    } // console.log(this.boxTop);


    this.animate(); // console.log(this.index);
  },
  bottomEvent: function bottomEvent() {
    //现在的目的是获取到元素的定位，
    // $("p:last").offset({ top: 10, left: 30 });
    //    console.log(this.boxTop)
    if (this.index == 0) {
      this.index = this.img.length - 2;
      this.box.css({
        top: -this.boxTop - this.imgheight * (this.index + 1)
      });
    } else {
      this.index--;
    }

    console.log(this.boxTop);
    this.animate();
    console.log(this.index);
  },
  animate: function animate() {
    this.box.stop().animate({
      top: -this.boxTop - this.imgheight * this.index
    });
  },
  autoPlay: function autoPlay() {
    // 自动执行;
    clearInterval(this.autoPlay_timer);
    this.autoPlay_timer = setInterval(function () {
      // this.right_btn.trigger("click");
      this.bBtn.triggerHandler("click");
    }.bind(this), 1000);
    console.log("自动播放");
  },
  stopPlay: function stopPlay() {
    clearInterval(this.autoPlay_timer);
    console.log("停止播放");
  }
});
var lbanner = new Lbanner();
lbanner.init(); //先用jquery获取需要的元素
// 绑定点击事件
//获取一个元素的高度
//事件触发后高度上移一个元素高度
//移动到最后直接跳转到第二个元素