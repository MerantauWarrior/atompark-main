// multiple equal sliders on one page
// $('.video__movies-slider').each(function () {
//   var slider = $(this);
//   slider.slick({
//     dots: false,
//     infinite: false,
//     slidesToShow: 1,
//     prevArrow: slider.parent().find('.video__arrow-prev'),
//     nextArrow: slider.parent().find('.video__arrow-next')
//   });
//   slider.parent().find('.video__arrow-prev').hide();
//   slider.on('afterChange', function (event, slick, currentSlide) {
//     var count = slick.slideCount;
//     if (currentSlide > 0) {
//       slider.parent().find('.video__arrow-prev').show();
//     } else {
//       slider.parent().find('.video__arrow-prev').hide();
//     }
//     if (currentSlide + 1 >= count) {
//       slider.parent().find('.video__arrow-next').hide();
//     } else {
//       slider.parent().find('.video__arrow-next').show();
//     }
//   });
// });

//Helpers
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
  console.log('you use mobile');
}

$(document).ready(function () {
  //Header
  $('.header-submenu__list-link').hover(function () {
    var srcImg = $(this).data('img')
    if(typeof srcImg !== typeof undefined && srcImg !== false){
      $('.header-submenu-product img').attr('src', srcImg);
    }
  }, function () {
    $('.header-submenu-product img').attr('src', 'assets/img/general/header/header-change-placeholder.png');
  })
  $('.header-lang span').click(function () {
    $('.header-lang__select').fadeToggle(250);
  });
  //header mobile
  if($(window).width() < 768){
    var lastScrollTop = 0;
    $(window).on("scroll", function(){
      if($(window).width() < 768){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
          if(st>window.innerHeight/2){
            $('.header-search').fadeOut(250);
          }
        } else {
          $('.header-search').fadeIn(250);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }
    });
    $('.header-mobile-menu-toggle').click(function () {
      $('body').toggleClass('ovh');
      $('.header').toggleClass('header-navigation_opened');
    });
    $('.header-menu__link').click(function (e) {
      if(typeof $(this).attr('href') !== typeof undefined && $(this).attr('href') !== false){
        return true;
      }else{
        e.preventDefault();
        $(this).toggleClass('header-menu__link_active');
        $(this).siblings('.header-submenu').slideToggle(250);
      }
    })
    $('.header-submenu__top').click(function () {
      $(this).toggleClass('header-submenu__top_active');
      $(this).siblings('.header-submenu__list').slideToggle(250);
    })
  }else{
    $(window).off("scroll");
  }
  //Footer
  $('.footer-menu__arrow').click(function () {
    $(this).toggleClass('footer-menu__arrow_opened');
    $(this).parent().parent().find('.footer-menu__list').slideToggle(250);
  });

  // HOME
  if($('.home-cta').length > 0){
    $('.btn__home-cta-video').click(function () {
      $('.modal').show();
      if($('#homeCta').attr('src') === undefined || $('#homeCta').attr('src') === null){
        $('#homeCta').attr('src', $('#homeCta').data('src'));
      }else{
        $('#homeCta')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');
      }
    });
    $('.modal-home-cta__close').click(function () {
      $('#homeCta')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
      $('.modal').hide();
    });
    $('.js-modal-home-cta').click(function(event) {
      if(event.target === this){
        $('#homeCta')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
        $(this).hide();
      }
    });
  }

  if($('.home-regural__slider').length > 0){
    $('#homeBestsellers').slick({
      infinite: false,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //If css fails use that shit
    // $('.home-regural__slider').on('setPosition', function (event, slick) {
    //   $(slick.$slides).height('auto').css('height', $(slick.$slideTrack).height() + 'px');
    // });
    $('#homeServices').slick({
      infinite: false,
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if($('#homeReviews').length > 0){
    $('#homeReviews').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('#homeReviews').parent().find('.slider-arrow--prev'),
      nextArrow: $('#homeReviews').parent().find('.slider-arrow--next')
    });
  }

  if($('.js-home-counter').length > 0){
    function formattedHC(initalHCNumber) {
      $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d+)(\d{3})(\d{3})$/g, '$1, $2 $3'));
    }
    var initalHCNumber = parseInt(localStorage.getItem('homeCounter') ? localStorage.getItem('homeCounter') : 1000000);
    formattedHC(initalHCNumber);
    setInterval(function () {
      initalHCNumber = initalHCNumber + parseInt(Math.ceil(Math.random()*10));
      localStorage.setItem('homeCounter', initalHCNumber);
      formattedHC(initalHCNumber);
    }, parseInt(Math.ceil(Math.random()*10))*1000)
  }

  // SINGLE PRODUCT
  if($('.sp').length > 0){
    $('#spFeaturesSlider').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('#spFeaturesSlider').parent().find('.slider-arrow--prev'),
      nextArrow: $('#spFeaturesSlider').parent().find('.slider-arrow--next')
    });
    $('.video-slider__slider').each(function () {
      var slider = $(this);
      slider.slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: slider.parent().find('.slider-arrow--prev'),
        nextArrow: slider.parent().find('.slider-arrow--next')
      });
    });
    $('.sp-recommended__slider').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.sp-recommended__slider').parent().find('.slider-arrow--prev'),
      nextArrow: $('.sp-recommended__slider').parent().find('.slider-arrow--next')
    });
    $('#spReviews').slick({
      infinite: false,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('#spReviews').parent().find('.slider-arrow--prev'),
      nextArrow: $('#spReviews').parent().find('.slider-arrow--next')
    });
  }

});