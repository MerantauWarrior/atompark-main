//Home
$(document).ready(function () {

  $('.btn__home-cta-video').click(function () {
    $('body').addClass('ovh');
    $('.modal').show();
    if ($('#homeCta').attr('src') === undefined || $('#homeCta').attr('src') === null) {
      $('#homeCta').attr('src', $('#homeCta').data('src'));
    } else {
      $('#homeCta')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  });

  $('.js-modal-home-cta, .js-modal-home-cta-close').click(function (event) {
    if (event.target === this) {
      $('#homeCta')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  });

  $('#homeBestsellers').slick({
    lazyLoad: 'ondemand',
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


});