$(function ($) {

  "use strict";

  var earlierScrollTop = localStorage.getItem("scrollTop");
  if (earlierScrollTop != null) {
    localStorage.removeItem("scrollTop");
    window.scrollTo({ top: earlierScrollTop });
  }

  /*=========================== scroll background ===========================*/

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };

  });

  /*=========================== close scroll background ===========================*/

  /*=========================== smooth menu ===========================*/
  $('body').scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  /*=========================== smooth menu ===========================*/




  /*=========================== screenshot app ===========================*/

  var owls = $("#screenshot-owl");
  owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 4,
    loop: true,
    center: false,
    margin: 20,
    stagePadding: 0,
    dots: true,
    nav: false,

    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      768: {
        items: 4,
        nav: false,
        loop: true
      }
    }
  });

  /*=========================== screenshot app ===========================*/





  /*=========================== our team ===========================*/

  var owls = $("#team-slider");
  owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 3,
    loop: true,
    center: false,
    margin: 10,
    stagePadding: 0,
    dots: true,
    nav: false,

    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,

      },
      768: {
        items: 3,

        loop: true
      }
    }
  });

  /*=========================== our team ===========================*/



  /*=========================== testimonials ===========================*/

  var owls = $("#testimonial-owl");
  owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 2,
    loop: true,
    center: false,
    margin: 15,
    stagePadding: 0,
    dots: false,
    nav: true,

    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
        nav: true,
        loop: true
      }
    },
    navText: ["<i class='fas fa-angle-left fa-2x'></i>", "<i class='fas fa-angle-right fa-2x'></i>"]
  });

  /*=========================== testimonials ===========================*/



  /*=========================== home slider ===========================*/

  var owls = $("#home-slider-owl");
  owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    center: false,
    margin: 0,
    stagePadding: 0,
    dots: true,
    nav: false,

    animateOut: 'fadeOut',
    animateIn: 'fadeInLeft',

  });
  /*=========================== home slider ===========================*/


  /*=========================== subscribe buttons ===========================*/
  var modal = null;

  $(".subscribe-button").click(function (event) {
    event.preventDefault();
    if ($(this).hasClass("subscribed")) {
      return;
    }
    var dialogId = "#subscribe-modal-" + $(this).attr('form-id');
    $("body").addClass("modal-open");
    modal = $(dialogId);
    modal.show();
    var email = localStorage.getItem("email");
    if (email != null) {
      $(".email", modal).val(email);
    }
  });

  $(".close").click(function () {
    $("body").removeClass("modal-open");
    if (modal != null) {
      modal.hide();
      modal = null;
    }
  });

  $(window).click(function (event) {
    if (modal != null && event.target == modal[0]) {
      $("body").removeClass("modal-open");
      modal.hide();
      modal = null;
    }
  });

  $(".mailster-form").submit(function (event) {
    var email = $(".email", this).val();
    localStorage.setItem('email', email);

    localStorage.setItem('scrollTop', document.documentElement.scrollTop);

    var currentFormId = $(this).attr("form-id");
    var subscribedForms = localStorage.getItem("subscribed");
    if (subscribedForms) {
      subscribedForms += "," + currentFormId;
    } else {
      subscribedForms = currentFormId;
    }
    localStorage.setItem("subscribed", subscribedForms);
  });

  var email = localStorage.getItem("email");
  if (email != null) {
    $(".email").val(email);
  }

  $(".email").on('input', function(event) {
    $(".mailster-form").removeClass("subscribed");
  });

  var subscribedForms = localStorage.getItem("subscribed");
  if (subscribedForms != null) {
    var formIds = subscribedForms.split(",");
    for (var i = 0; i < formIds.length; i++) {
      var buttonId = "#subscribe-button-" + formIds[i];
      $(buttonId).addClass("subscribed");
      var formId = "#mailster-form-" + formIds[i];
      $(formId).addClass("subscribed");
    }
  }

  /*=========================== subscribe buttons ===========================*/

  // ------------------------------- AOS Animation
  AOS.init({
    duration: 1000,
    mirror: true
  });

  //counter js
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

});
