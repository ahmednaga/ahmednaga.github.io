/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    // Trigger Nice scroll plugin
    
    $("#rrr").niceScroll();
    
    
    // change Header Height
    
    $('.header').height($(window).height());
    
    // Scroll To Countdown 
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.countdown').offset().top
            
        }, 1000);
        
    });
    
    
    // smooth scroll to div 
    
    $('.links ul li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    // swiper slider 
        
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        autoplay: 5500,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 55,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 55
            },
            894: {
                slidesPerView: 2,
                spaceBetween: 55
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 50
            }
        }
    });
    
    /* Jquery Code */ 
    
    $(".toggle").click(function() {
       $('.links').slideToggle();
    });
    $(window).resize(function() {
       if ($(window).width() > 997) {
          $('.links').show();
       } else {
          $('.links').hide();
       }
    });
    
    /*scroll to top button */
    
    $(document).ready(function(){
  $(window).scroll(function(){
  if ( $(this).scrollTop() >= 500 ) {
      $(".Top").fadeIn();
  }
  else {
    $(".Top").fadeOut();
  }
  });
  $(".Top").click(function(){
    $("html,body").stop().animate({scrollTop : 0});
  });

});
    
});
