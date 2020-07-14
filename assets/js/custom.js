$(document).ready(function () {
  console.log('JQ');

  if($('.home-bestsellers__slider').length > 0){
    $('.home-bestsellers__slider').slick({
      infinite: false,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //If css fails use that shit
    // $('.home-bestsellers__slider').on('setPosition', function (event, slick) {
    //   $(slick.$slides).height('auto').css('height', $(slick.$slideTrack).height() + 'px');
    // });
  }

  if($('.js-home-counter').length > 0){
    var initalHCNumber = parseInt($('.js-home-counter').text());
    console.log(initalHCNumber.toLocaleString());
    console.log(new Intl.NumberFormat().format(initalHCNumber));
    setInterval(function () {
      initalHCNumber = initalHCNumber+1;
      $('.js-home-counter').text(initalHCNumber.toLocaleString());
    }, 1000)
  }


});