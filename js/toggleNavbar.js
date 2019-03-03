'use strict';

$(document).ready(function() {
  $(".hero-text").show("slide", { direction: "left" }, 1000);
});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled bg-primary', $(this).scrollTop() > 650  );

  // $('.hero-img').toggleClass('invert', $(this).scrollTop() > 600 );

});
