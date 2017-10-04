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




    /*
    * SUCCESS STORIES CAROUSEL
    */

    // Populate the custom page
    var successCustomPager = "#bx-custom-pager";

    $(".success-story-slider > li").each(function(e){
      var newPagerItem = '<a data-slide-index="'+ e +'" href="">' + (e+1) + '</a>';
      $(successCustomPager).append( newPagerItem );
    });



    // Initialize the image before/after slider
    var $successStoryImageSliders = $(".success-story-img-slides");
    var successStoryImageOpts = {
      mode: "fade",
      hideControlOnEnd: true,
      infiniteLoop: true,
      auto: true,

      // Hide fault next - prev
      controls: false,
      pager: true,
      pagerType: "full"
    };

    var successImageBxSlider = $successStoryImageSliders.bxSlider( successStoryImageOpts );

    // Initialize the content slider

    var $successStorySlider = $(".success-story-slider");

    var successStoryOpts = {

      hideControlOnEnd: true,
      infiniteLoop: false,
      adaptiveHeight: true,

      // Hide fault next - prev
      controls: true,
      pager: true,
      pagerType: "full",

      // Next - Prev
      nextSelector: '#success_next_slide',
      prevSelector: '#success_prev_slide',
      pagerCustom:  successCustomPager,

      // Changing the image sliders for success story
      onSlideAfter: function( $slideElement, oldIndex, newIndex ){
        // Hide the old slide
        $("[data-success-image='"+ (oldIndex + 1) +"']").addClass("invisible");

        // Show the new slide
        $("[data-success-image='"+ (newIndex + 1) +"']").removeClass("invisible");

      },

      // Show the success stories section when slider is loaded
      onSliderLoad: function(){
        $("#success_stories_section").css({
          "opacity": 1,
          "height": "initial"
        });
      }


    };

    var successBxSlider = $successStorySlider.bxSlider( successStoryOpts );

    /*------------------------------------------------------
    * LANDING PAGE
    ------------------------------------------------------*/

    /*
    * Landing page hero slider
    */

    var $landingPageSlider = $("#gymHistorySlider");

    var landingPageSliderOpts = {
      hideControlOnEnd: true,
      infiniteLoop: true,
      auto: true,

      // Hide fault next - prev
      controls: false,
      pager: true,
      pagerType: "full",
      pagerCustom: "#lading_slider_pager"
    };

    var landingPageBxSlider = $landingPageSlider.bxSlider( landingPageSliderOpts );


    /*------------------------------------------------------
    * SINGLE PROGRAM PAGE
    ------------------------------------------------------*/

    /*
    * Program Cards Slider - only for screens smaller than
    */

    var cardsSliderOpts = {
      controls: false
    };

    var program_cards_slider = $(".p-cards-slider").bxSlider(cardsSliderOpts);

    if ( program_cards_slider.destroySlider ) {
        if ( window.innerWidth < 1010 ) {
          program_cards_slider.reloadSlider();
        }
        else {
            program_cards_slider.destroySlider();
        }
    }

    if ( $(".p-cards-slider").length > 0 ) {

      $(window).on("resize", function(e){
        // Program Cards Slide
        if ( $(this).width() > 1010 ) {
            program_cards_slider.destroySlider();
        }

        else if ( $(this).width() < 1010 ) {
            program_cards_slider.reloadSlider();
        }

        else {
          // do nothing
        }
      });
    }


    /*
    * Benefits Styles 
    */

    var benenfitSliderOpts = {
      controls: false
    };
    
    var benefits_items_slider = $(".benefits-list.slider").bxSlider( benenfitSliderOpts );

    if ( $(".benefits-list.slider").length > 0 ) {
      if ( $(window).width() < 768 ) {
        benefits_items_slider.reloadSlider();
      }

      else {
        benefits_items_slider.destroySlider();
      }
    }


    /*------------------------------------------------------
    * GYM PAGE
    ------------------------------------------------------*/  

    /*
    * Gym Page Slider
    */

    var $gymPageCarouselSlider = $("#gym_page_slider");
    $gymPageCarouselSlider.on("initialized.owl.carousel", function(){
      $("#gyms_slider_section").animate({
        "opacity": 1 
      }).css({
        "height": "initial"
      });
    });
    var gymPageCarouselMain = $gymPageCarouselSlider.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3500,
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



    gymPageCarouselMain.on("changed.owl.carousel", function(e){
        var $animatingElems = $(e.relatedTarget.$element).find("[data-animation ^= 'animated']");
        doAnimations( $animatingElems );
    });


    /* Programs Offered Carousel on Gym page */
    var prOfferedCustomPager = "#pr_offered_bxPager";

    $("#programsOffered_slide > li").each(function(e){
      var newPagerItem = '<a data-slide-index="'+ e +'" href="">' + (e+1) + '</a>';
      $(prOfferedCustomPager).append( newPagerItem );
    });


    var $programOfferedSliders = $("#programsOffered_slide");
    var programOfferedOpts = {
      
      hideControlOnEnd: true,
      infiniteLoop: false,
      adaptiveHeight: true,

      // Hide fault next - prev
      controls: true,
      pager: true,
      pagerType: "full",

      // Next - Prev
      nextSelector: '#pr_offered_next_slide',
      prevSelector: '#pr_offered_prev_slide',
      pagerCustom: prOfferedCustomPager,


      onSlideAfter: function( $slideElement, oldIndex, newIndex ){
        // Hide the old slide
        var oldElm = $("[data-programs-offered='"+ (oldIndex + 1) +"']").addClass("hidden");
            oldElm.addClass("hidden");

        // Show the new slide
        var newElm = $("[data-programs-offered='"+ (newIndex + 1) +"']").removeClass("hidden");
            newElm.removeClass("hidden");

      },

      
      onSliderLoad: function(){
        $(".pr-offered-section").css({
          "opacity": 1,
          "height": "initial"
        });
      }
    };

    var programOfferedBxSlider = $programOfferedSliders.bxSlider( programOfferedOpts );



    /*
    * Gym Page Photo Gallery Sliders 
    */

    // Image Gallery Slider #1
    var $photo_slider_1 = $("#photo_gallery_1");

    $photo_slider_1.on("initialized.owl.carousel", function(e){
      $(".photo-gallery-section").css({
        "height": "initial"
      }).animate({
        "opacity": 1
      });
    });

    var photo_slider_1_owl = $photo_slider_1.owlCarousel({
      items: 1,
      dots: true,

      // animation effect
      animateOut: 'slideOutLeft',
      animateIn: 'flipInY',

      // Show carousel container on load

    });


    // Image Gallery Slider #1
    var $photo_slider_2 = $("#photo_gallery_2");

    $photo_slider_2.on("initialized.owl.carousel", function(e){
      $(".photo-gallery-section").css({
        "height": "initial"
      }).animate({
        "opacity": 1
      });
    });

    var photo_slider_2_owl = $photo_slider_2.owlCarousel({
      items: 2,
      dots: false,
      nav: true,

      // animation effect
      animateOut: 'slideOutLeft',
      animateIn: 'flipInY'

      // Show carousel container on load

    });

    



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




    /*------------------------------------------------------
    * WATERWHEEL CAROUSEL - GYM OFFERS
    ------------------------------------------------------*/
    var gym_offer_carousel = $("#gym_offers_waterwheel");

    var gymOfferCarousel = gym_offer_carousel.waterwheelCarousel({
      flankingItems: 3,
      autoPlay : 3000,
      dots: true,
      horizonOffset : 0,
      separation: 78,
      sizeMultiplier: 0.9,
      captionBelow: true
    });



    $("#gymOfferPrev").on("click touch", function(){
      gymOfferCarousel.prev();
    });

    $("#gymOfferNext").on("click touch", function(){
      gymOfferCarousel.next();
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



/* Modernizr Test for Mix-Blend-Mode */
Modernizr.addTest('mix-blend-mode', function(){
    return Modernizr.testProp('mixBlendMode');
});