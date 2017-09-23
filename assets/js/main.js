/************************************************
// JAVASCRIPT FILE FOR TALWALKAR'S GYM
// RE-USE OF THIS FILE IS NOT ALLOWED 
// ON OTHER WEBSITE / APP / OR ANYWHERE.

*************************************************/


(function ($) {

  'use strict'

  $(function(){




    /*----------------------------------------
    Main Header Navigation and Effects
    -----------------------------------------*/
    // Dropdown menu on large screens


    // Programs Dropdown menu image changer
    var $programs_img_dropdown = {
      elm: $("#programs_dropdown_img"),
      img: $("#programs_dropdown_img").attr("src")
    };

    $(".dropdown-menu.programs-dropdown .nav-link").on("mouseover", function(){

      var img_url = $(this).attr("data-image");

      if ( img_url ) {
        $programs_img_dropdown.elm.fadeOut(0);
        $programs_img_dropdown.elm.fadeIn(400);
        $programs_img_dropdown.elm.attr("src", img_url);
      }

      else {
        if ( $programs_img_dropdown.img.length > 0 ) {
          $programs_img_dropdown.elm.fadeOut(200);
          // $programs_img_dropdown.elm.attr("src", $programs_img_dropdown.img);
        }
        else {
          $programs_img_dropdown.elm.hide();
        }
      }
    });


    /*
    * Mobile Navigation Menu Functions
    */


    $("#mobMenuDropdownBtn").on("click", function(e){

      $("#mobileMenuDropdown").toggleClass("open");
      $("#mobileMenuDropdown").css({"top": $(".main-header").height() });

      // Reset mob menu 
      reset_mob_menu();

      e.preventDefault();
    });

    $("#close_mob_menu").on("click", function(e){
      $("#mobileMenuDropdown").removeClass("open");
      e.preventDefault();
    });

    // Opening secondary menus in mob navigation
    var _current_secondary_menu = undefined;

    $(".secondary-mob-menu").on("click", function(e){
      var targetElm = $(this).attr("data-target");
      $(targetElm).removeClass("d-none");
      $(targetElm).addClass("d-flex");
      // Hide the primary
      $("#mob_menu_primary").addClass("d-none");

    });

    $(".back-menu-link").on("click", function(e){
      var targetElm = $(this).parent().parent();
      $(targetElm).addClass("d-none");
      $(targetElm).removeClass("d-flex");
      // Show the primary menu
      $("#mob_menu_primary").removeClass("d-none");
    });



    /*
    * Mobile Footer Links Accordion
    */
    $(".footer-links-panel .links-col .links-section-btn").on("click", function(e){

      

      // Now open the one attached with this link
      var thisNav = $(this).parent().parent(".links-col");

      if ( thisNav.hasClass("open") ) {
        thisNav.removeClass("open");
      }

      else {
        // Close all other opened accordions first
        $(".footer-links-panel .links-col.open").removeClass("open");

        // Add the to the open one
        thisNav.addClass("open");
      }


      // prevent default
      e.preventDefault();

    });



    /*-------------------------------------------
    Sliders and Carousels
    --------------------------------------------*/

    /*
    * Home Page Carousel
    */

    $("#home_slider_1").on("initialized.owl.carousel", function(e){
      var $homeCarouselSlider = $("#home_slider_1");
          $homeCarouselSlider.css({'height': 'initial'});
          $homeCarouselSlider.animate({'opacity': 1});
    });


    var homepageCarouselMain = $("#home_slider_1").owlCarousel({
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 0,
        nav: false,
        dots:true, 
        items: 1,
        loop: false,
        responsive:{
            0:{
                items:1
            },

            600:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    homepageCarouselMain.on("changed.owl.carousel", function(e){
      var $animatingElems = $(e.relatedTarget.$element).find("[data-animation ^= 'animated']");
      doAnimations( $animatingElems );
    });


    $("#home_slider_1 .fitText").fitText();





    /*------------------------------------------------------
    * CONTACT US PAGE 
    ------------------------------------------------------*/

    $(".contact-form .form-row input, .contact-form .form-row select, .contact-form .form-row textarea, .contact-form .form-row select").on("change", function(){

      if ( $(this).val().length > 0 ) {
        $(this).parent().parent(".form-row").addClass("input--filled");
      }

      else {
        $(this).parent().parent(".form-row").removeClass("input--filled");
      }

    });


    $("#form_query_text").on("keydown", function(){
      if ( $(this).val().length > 20 ) {
        $(this).css({"height": 128});
      }
      else {
        $(this).css({"height": 38});
      }
    }).on("focus", function(){
      if ( $(this).val().length > 20 ) {
        $(this).css({"height": 128});
      }
      else {
        $(this).css({ "height": 38});
      }
    }).on("blur", function(){
      if ( $(this).val().length > 20 ) {
        $(this).css({"height": 128});
      }
      else {
        $(this).css({"height": 38});
      }
    });



    /* Dynamic Contact Number Change */
    var category_contact = {
      "0": "022-61446767",
      "category_gymMembership": "022-61446767",
      "category_careerOpportunity": "{000-00000001}",
      "category_salesMarketing": "{000-00000002}",
      "category_investorGrievance": "{000-00000003}",
      "category_franchise": "{000-00000004}",
      "category_corporateMembership": "{000-00000005}",
      "category_feedback": "{000-00000006}",
      "category_zumbaWear": "{000-00000007}",
      "category_powerWorldGym": "{000-00000008}",
      "category_zorba": "0{000-00000009}"
    };

    var category_contact_bg = {
      "0": "022-61446767",
      "category_gymMembership": "022-61446767",
      "category_careerOpportunity": "{000-00000001}",
      "category_salesMarketing": "{000-00000002}",
      "category_investorGrievance": "{000-00000003}",
      "category_franchise": "{000-00000004}",
      "category_corporateMembership": "{000-00000005}",
      "category_feedback": "{000-00000006}",
      "category_zumbaWear": "{000-00000007}",
      "category_powerWorldGym": "{000-00000008}",
      "category_zorba": "0{000-00000009}"
    };

    $("#form_category").on("change", function(){
      $("#dynamicContactText").fadeOut(150);

      if ( $(this).val() !== "0" ) {
        $("#contact_no_dynamic").text( category_contact[ $(this).val() ] );
      }

      else {
        $("#contact_no_dynamic").text( category_contact[ "0" ] );
      }

      window.setTimeout(function(){
        $("#dynamicContactText").fadeIn(200);
      }, 200);
    });


    $("#resetContactForm").on("click", function(e){
      // Reset the form
      document.getElementsByName("contactForm")[0].reset();

      // Remove all input--filled classes
      $(".input--filled").removeClass("input--filled");

      e.preventDefault();
    });
















  	/* Smooth Scrolling Links : .smooth-scroll */
  	$('[data-smooth-scroll]').on('click',  function(e){
  	  e.preventDefault();

  	  $('html, body').animate({
  	      scrollTop: $( $.attr(this, 'href') ).offset().top
  	  }, 700);

  	});



  	/* Scroll handler */
  	$(window).on('scroll', function(){
      if ( $(this).scrollTop() < 150 ) {
        $(".main-header .logo").removeClass("shrink");
      }
      else {
        $(".main-header .logo").addClass("shrink");
      }
  	});



  });

}(jQuery));







// This will reset the secondary and primary menu when the menu on mobile is closed / open
function reset_mob_menu() {
  // Remove the d-none class from the primary menu
  $("#mob_menu_primary").removeClass("d-none");

  // Add d-none class to all the secondary menus 
  $(".mob-nav-secondarymenu").removeClass("d-flex").addClass("d-none");

  return 0;
}


// Slider Animation
function doAnimations( elems ) {
  //Cache the animationend event in a variable
  var animEndEv = 'webkitAnimationEnd animationend';
  
  elems.each(function () {
    var $this = $(this),
        $animationType = $this.attr('data-animation');
        $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
    });
  });
}