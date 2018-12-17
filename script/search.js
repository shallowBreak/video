"use strict";

var oBtn = document.querySelector("#searchbtn");
var oInp = document.querySelector("#search");
var oli = document.querySelector(".formsearch ul");

oInp.oninput = function () {
  // hello()
  var word = oInp.value;
  var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + word;
  jsonp(url, "cb").then(function (res) {
    console.log(res);
    var html = "";

    for (var i = 0; i < res.s.length; i++) {
      html += "<li><a href=\"#\">".concat(res.s[i], "</a></li>"); // 
    }

    oli.innerHTML = html;
  });
};

function jsonp(url, cb) {
  cb = cb ? cb : "callback";
  var jsonp_promise = new Promise(function (resolve, rejected) {
    var script = document.createElement("script");
    var cb_name = "cb" + Date.now();
    url += (/\?/.test(url) ? "&" : "?") + cb + "=" + cb_name;
    script.src = url;
    document.body.appendChild(script);

    window[cb_name] = function (res) {
      resolve(res);
    };

    script.onload = function () {
      this.remove();
    };
  });
  return jsonp_promise;
}