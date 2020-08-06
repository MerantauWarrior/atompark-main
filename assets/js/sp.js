//SingleProduct
$(document).ready(function () {

  $('#spFeaturesSlider').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('#spFeaturesSlider').parent().find('.slider-arrow--prev'),
    nextArrow: $('#spFeaturesSlider').parent().find('.slider-arrow--next'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
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
      nextArrow: slider.parent().find('.slider-arrow--next'),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  $('.sp-recommended__slider').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.sp-recommended__slider').parent().find('.slider-arrow--prev'),
    nextArrow: $('.sp-recommended__slider').parent().find('.slider-arrow--next'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.sp-download-compatible__slider').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 3,
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

});