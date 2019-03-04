'use strict';

$(document).ready(function() {
  $(".hero-text").show("slide", { direction: "left" }, 1000);
});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled bg-primary', $(this).scrollTop() > 650  );

  // $('.hero-img').toggleClass('invert', $(this).scrollTop() > 600 );

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

// När man klickar på knappen så tas man till toppen utav hemsidan
$(function(){
  $("#backToTop").click(function(e){
    e.preventDefault();
    $("html, body").animate({"scrollTop": "0px"});
  })
});
