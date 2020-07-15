$(document).ready(function () {
  console.log('JQ');

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

  if($('.home-program').length > 0){
    $('.home-program-item').on('mouseover',function () {
      $('.home-program-item').removeClass('home-program-item_active');
      $(this).addClass('home-program-item_active');
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