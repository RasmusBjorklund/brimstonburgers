'use strict';

//Scroll funtion that change navbar on scroll and display back to top button
$(window).scroll(function () {

  $('nav').toggleClass('bg-primary', $(this).scrollTop() > 50  );

  //Back to top button, toggle between display block and none to show button or not
  if ($(this).scrollTop() > 190 ) {
    $("#backToTop").css('display', 'block');
  } else {
    $("#backToTop").css('display', 'none');
  }

});

//click funtion that sends user to the top of the site
$("#backToTop").click(function(e){
  e.preventDefault();
  $("html, body").animate({"scrollTop": "0px"});
});


ScrollReveal().reveal('.fade-in-block', { duration: 2000, delay: 500});
