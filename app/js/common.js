$(function() {


//----------------------------wowJS-------------------------------
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();




//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger-active');
    $('nav').toggleClass('nav-active');
    $('header').toggleClass('header-menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header-active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 80}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     // $('.hamburger').removeClass('hamburger-active');
     // $('.header-menu').removeClass('header-menu');
     // $('.header-active').removeClass('header-active');
     // $('.nav-active').removeClass('nav-active');

  });
  
});





//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});


//----------------------------------------svg----------------------------------
;( function( window, document )
{
  'use strict';

  var file     = 'img/symbols.html',
      revision = 1.2;

  if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
      return true;

  var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
      request,
      data,
      insertIT = function()
      {
          document.body.insertAdjacentHTML( 'afterbegin', data );
      },
      insert = function()
      {
          if( document.body ) insertIT();
          else document.addEventListener( 'DOMContentLoaded', insertIT );
      };

  if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
  {
    data = localStorage.getItem( 'inlineSVGdata' );
    if( data )
    {
        insert();
        return true;
    }
  }

  try
  {
    request = new XMLHttpRequest();
    request.open( 'GET', file, true );
    request.onload = function()
      {
        if( request.status >= 200 && request.status < 400 )
          {
            data = request.responseText;
            insert();
            if( isLocalStorage )
            {
              localStorage.setItem( 'inlineSVGdata',  data );
              localStorage.setItem( 'inlineSVGrev',   revision );
            }
        }
    }
    request.send();
  }
  catch( e ){}


 var swiper = new Swiper('.company-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  var swiper = new Swiper('.swiper-news', {
      navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
      },
    });



}( window, document ) );


  var relatedSlider = new Swiper('.partner-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: true,
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
          breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 35,
            width: 300
            // slidesPerColumn: 5
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
            width: 440,
            // slidesPerColumn: 5
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15,
            width: 500,
            // slidesPerColumn: 5
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
            width: 685,
            // slidesPerColumn: 5
          }
        },
    });

// $(document).ready(function() {
//   var breakpoint = window.matchMedia( '(min-width: 4000px)' );
//   var partnerSlider;

//   var breakpointChecker = function() {
//      // if larger viewport and multi-row layout needed
//      if ( breakpoint.matches === true ) {
//         // clean up old instances and inline styles when available
//         if ( partnerSlider !== undefined ) {
//           $('.partners__wrap').removeClass('swiper-container');
//           $('.partners__wrap-card').unwrap('.swiper-wrapper');
//           $('.partners__wrap-card').removeClass('swiper-slide');
//           $('.partners__wrap .swiper-pagination').remove();
//           partnerSlider.destroy( true, true );
//         }
//         // or/and do nothing
//         return;
//      // else if a small viewport and single column layout needed
//      } else if ( breakpoint.matches === false ) {
//         // fire small viewport version of swiper
//         return enableSwiper();
//      }
//   };

//   var enableSwiper = function() {

//     $('.partners__wrap').addClass('swiper-container');
//     if (! $('.partners__wrap .swiper-wrapper').length ) {
//       $('.partners__wrap-card').wrapAll('<div class="swiper-wrapper"></div>');
//     }
//     $('.partners__wrap-card').addClass('swiper-slide');
//     $('.partners__wrap').append('<div class="swiper-pagination"></div>');

//     partnerSlider = new Swiper ('.partners__wrap', {
//       slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 35,
//       width: 300
//       // slidesPerColumn: 5
//     },
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//       width: 440,
//       // slidesPerColumn: 5
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//       width: 500,
//       // slidesPerColumn: 5
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//       width: 685,
//       // slidesPerColumn: 5
//     }
//   },

      
//     });
//   }

  // breakpoint.addListener(breakpointChecker);
  // breakpointChecker();

  // $(function() {
  //   $('.advantages__item').matchHeight({
  //     byRow: false,
  //     property: 'height',
  //   });
  // });

  $('.advantages__item').each(function(index, el) {
    $(el).mouseover(function(event) {
      $('.advantages__card').attr('data-active-card', index + 1);
    });

    $(el).mouseout(function(event) {
      $('.advantages__card').removeAttr('data-active-card');
    });
  });

// });


 // var swiper = new Swiper('.swiper-news', {
 //        direction: 'vertical',
 //        slidesPerView: 1,
 //        spaceBetween: 30,
 //        mousewheel: true,
 //        pagination: {
 //          el: '.swiper-pagination',
 //          clickable: true,
 //        },
 //    });



  var acc = $('.calc__title');
var accContent = $('.calc__content');
$('.calc__title.calc__active').next().slideDown(500);
acc.on('click', function(e) {
  if ($(this).hasClass('calc__active')) {
    $(this).removeClass('calc__active');
    $(this).next().slideUp(500);
  }
  else {
    $(this).addClass('calc__active');
    accContent.not($(this).next()).slideUp(500);
    acc.not($(this)).removeClass('calc__active');
    $(this).next().slideDown(500);
  }
});


 $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
    arrows: true,
    speed: 1200,
    adaptiveHeight: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({

   slidesToShow: 5,
   slidesToScroll: 4,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });




  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
    arrows: true,
    speed: 1200,
    adaptiveHeight: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({

   slidesToShow: 5,
   slidesToScroll: 4,
   asNavFor: '.slider-for',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });


if($('#slider').length) {
 var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [20],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 100
  }
}); 

var sliderTwo = document.getElementById('slider-two');

noUiSlider.create(sliderTwo, {
  start: [50],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 100
  }
}); 


  var valOne = parseInt(slider.noUiSlider.get());
  var valTwo = parseInt(sliderTwo.noUiSlider.get());

  $('#additionalValue1').val(valOne);
  $('#additionalValue2').val(valTwo);



  slider.noUiSlider.on('update', function( values, handle ) {
    $('#additionalValue1').val(parseInt(values[handle]));

  });

  sliderTwo.noUiSlider.on('update', function( values, handle ) {
    $('#additionalValue2').val(parseInt(values[handle]));
  });

  $("#recount").click(function() {
    var e = 10 * parseInt(slider.noUiSlider.get()) + 20 * parseInt(sliderTwo.noUiSlider.get()) + $("#system").val();
    $("#total_cost").text(e)
  }); 
}




  $('.slider-for-two').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
    arrows: true,
    speed: 1200,
    adaptiveHeight: false,
   fade: true,
   asNavFor: '.slider-nav-two'
 });
 $('.slider-nav-two').slick({

   slidesToShow: 3,
   slidesToScroll: 4,
   asNavFor: '.slider-for-two',
   dots: true,
   focusOnSelect: true
 });

(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));



$('.about-detail__card').hide();
$('.about-detail__card:first').show();
$('.tabs ul a:first').addClass('active');

$('.tabs ul a').click(function(event){
  event.preventDefault();
  $('.tabs ul a').removeClass('active');
  $(this).addClass('active');
  $('.about-detail__card').hide();

  var selectTab = $(this).attr('href');
  $(selectTab).fadeIn();
});



 // var swiper = new Swiper('.swiper-detail', {
 //     direction: 'horizontal',
 //        slidesPerView: 3,
 //        spaceBetween: 30,
 //        mousewheel: true,
 //        pagination: {
 //          el: '.swiper-pagination',
 //          clickable: true,
 //        },
 //    });



  var relatedSlider = new Swiper('.related-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: true,
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
         breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 35,
            width: 300
            // slidesPerColumn: 5
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
            width: 440,
            // slidesPerColumn: 5
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15,
            width: 500,
            // slidesPerColumn: 5
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
            width: 685,
            // slidesPerColumn: 5
          }
        },
    });





  


