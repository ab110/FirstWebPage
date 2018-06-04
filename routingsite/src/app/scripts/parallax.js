$(window).scroll(function(){
  var backGround = document.querySelector("#bg");
  var me = document.querySelector("#me");
  var desc = document.querySelector("#desc");
  //var navBar = document.querySelector("#nav");

  var xScrollPos = window.scrollX;
  var yScrollPos = window.scrollY;

  setTranslate(0, yScrollPos * -.2, backGround);
  setTranslate(0, yScrollPos * -.02, me);
  setTranslate(0, yScrollPos * -.65, desc);
  //setTranslate(0, yScrollPos * -.1, navBar);


})

function setTranslate(xPos, yPos, el){
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
