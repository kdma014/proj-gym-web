/************************************************
// JAVASCRIPT FILE FOR TALWALKAR'S GYM
// RE-USE OF THIS FILE IS NOT ALLOWED 
// ON OTHER WEBSITE / APP / OR ANYWHERE.

*************************************************/


(function ($) {
  'use strict'
  $(function(){

  	/* Smooth Scrolling Links : .smooth-scroll */
  	$('[data-smooth-scroll]').on('click',  function(e){
  	  e.preventDefault();

  	  $('html, body').animate({
  	      scrollTop: $( $.attr(this, 'href') ).offset().top
  	  }, 700);

  	});

  	/* Scroll handler */
  	$(window).on('scroll', function(){
  		
  	});



  });
}(jQuery));
