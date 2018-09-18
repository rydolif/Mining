$(function() {

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
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
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

 $('.advantages__item').each(function(index, el) {
    $(el).mouseover(function(event) {
      $('.advantages__card').attr('data-active-card', index + 1);
    });

    $(el).mouseout(function(event) {
      $('.advantages__card').removeAttr('data-active-card');
    });
  });

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

  var relatedSlider = new Swiper('.related-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: true,
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });





  


