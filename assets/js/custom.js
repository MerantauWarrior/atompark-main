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
    $('.header-submenu-product img').attr('src', 'assets/img/header/header-change-placeholder.png');
  })
  $('.header-lang span').click(function () {
    $('.header-lang__select').fadeToggle(250);
  });
  //header mobile
  if($(window).width() < 768){
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){
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
    }, false);
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

  if($('.reviews-slider').length > 0){
    $('.reviews-slider').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.reviews-slider-arrow--prev'),
      nextArrow: $('.reviews-slider-arrow--next')
    });
    $('.reviews-slider-arrow--prev').addClass('reviews-slider-arrow_inactive');
    $('.reviews-slider').on('afterChange', function (event, slick, currentSlide) {
      var count = slick.slideCount;
      if (currentSlide > 0) {
        $('.reviews-slider-arrow--prev').removeClass('reviews-slider-arrow_inactive');
      } else {
        $('.reviews-slider-arrow--prev').addClass('reviews-slider-arrow_inactive');
      }
      if (currentSlide + 1 >= count) {
        $('.reviews-slider-arrow--next').addClass('reviews-slider-arrow_inactive');
      } else {
        $('.reviews-slider-arrow--next').removeClass('reviews-slider-arrow_inactive');
      }
    });
  }

  if($('.js-home-counter').length > 0){
    function formattedHC(initalHCNumber) {
      // if(initalHCNumber > 99999999){
      //   $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{3})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      // }else if(initalHCNumber > 9999999){
      //   $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{2})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      // }else {
      //   $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{1})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      // }
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

});