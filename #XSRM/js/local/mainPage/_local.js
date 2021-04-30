@@include("./_checkbosex.js");
@@include("./_responsiveBlock.js");

function load() {
  let video = document.querySelector(".firstScreen__video");
  video.play();
  // var userAgent = navigator.userAgent.toLowerCase();
  // if (userAgent.indexOf("safari") != -1) {
  //   if (userAgent.indexOf("chrome") > -1) {
  //     video.play();
  //   } else {
  //     video.play();
  //     video.setAttribute("playsinline", "true");
  //   }
  // }
}

load();
