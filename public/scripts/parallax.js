window.addEventListener("DOMContentLoaded", scrollLoop, false);

console.log("in script");

var backGround = document.querySelector("#bg");
var me = document.querySelector("#me");
var desc = document.querySelector("#desc");
var navBar = document.querySelector("#nav");

var xScrollPos;
var yScrollPos;

function scrollLoop(e){

  xScrollPos = window.scrollX;
  yScrollPos = window.scrollY;

  setTranslate(0, yScrollPos * -.5, backGround);
  setTranslate(0, yScrollPos * -.75, me);
  setTranslate(0, yScrollPos * -1, desc);
  //setTranslate(0, yScrollPos * -.1, navBar);

  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
