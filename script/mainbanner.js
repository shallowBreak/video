"use strict";

function Mainbanner() {}

$.extend(Mainbanner.prototype, {
  init: function init() {
    this.mLi = $(".banner .Mainul li");
    this.Btn = $(".indexBtn");
    this.index = 0;
    this.aBtn = $(".banner .Mainul li a");
    this.creatBtn();
  },
  //先渲染按钮
  creatBtn: function creatBtn() {
    // console.log(this.mli)
    for (var i = 0; i < this.mLi.length; i++) {
      var span = $("<span>");

      if (i == 0) {
        this.Btn.append(span);
        this.Btn.children().eq(0).addClass("spactive");
      } else {
        this.Btn.append(span);
      }
    }

    this.bindEvent();
  },
  // 绑定事件
  bindEvent: function bindEvent() {
    // $('#bar').index(); 
    this.Btn.on("click", "span", this.spanActive).bind(this); // this.Btn.click($.proxy(this.spanActive , this));
    // console.log(this.mLi)

    this.aBtn.mouseenter($.proxy(this.stopPlay, this));
    this.aBtn.mouseleave($.proxy(this.autoPlay, this));
    this.Btn.mouseenter($.proxy(this.stopPlay, this));
    this.Btn.mouseenter($.proxy(this.stopPlay, this));
    this.autoPlay();
  },
  //改变class名
  //并且获取到对应下标
  spanActive: function spanActive() {
    // 这里this的指向其实是span,
    // console.log($(this).index())
    if ($(this).index() == -1) {
      if (this.index == $(".banner .Mainul li").length - 1) {
        this.index = 0; // console.log(this.index)
      } else {
        this.index++; // console.log(this.index)
      }
    } else {
      this.index = $(this).index();
    }

    switch (this.index) {
      case 0:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(255, 188, 9)");
        break;

      case 1:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(228, 2, 217)");
        break;

      case 2:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(0, 0, 0)");
        break;

      case 3:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(0, 198, 242)");
        break;

      case 4:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(0, 202, 193)");
        break;

      case 5:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(251, 98, 214)");
        break;

      case 6:
        $(".banner .Mainul li").eq(this.index).css("background", "rgb(255, 130, 46)");
        break;
    }

    $(".indexBtn").children().eq(this.index).addClass("spactive").siblings().removeClass("spactive"); // $(this).addClass("spactive").siblings().removeClass("spactive")

    $(".banner .Mainul li").eq(this.index).addClass("active").siblings().removeClass("active"); // this.mLi.eq(this.index)
    // this.mLi.eq(index).addClass("active").siblings().removeClass("active")
  },
  //改变对应下标的class名（图片的）
  autoPlay: function autoPlay() {
    // 自动执行;
    this.autoPlay_timer = setInterval(function () {
      this.spanActive();
    }.bind(this), 3000);
  },
  stopPlay: function stopPlay() {
    clearInterval(this.autoPlay_timer); // console.log("结束播放")

    return 0;
  }
});
var mainbanner = new Mainbanner();
mainbanner.init();