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
    function formattedHC(initalHCNumber) {
      if(initalHCNumber > 99999999){
        $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{3})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      }else if(initalHCNumber > 9999999){
        $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{2})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      }else {
        $('.js-home-counter').text(initalHCNumber.toString().replace(/^(\d{1})(\d{3})(\d{3})$/g, '$1, $2 $3'));
      }
    }
    var initalHCNumber = parseInt(localStorage.getItem('homeCounter') ? localStorage.getItem('homeCounter') : 1000000);
    formattedHC(initalHCNumber);
    setInterval(function () {
      initalHCNumber = initalHCNumber + parseInt(Math.random()*10);
      localStorage.setItem('homeCounter', initalHCNumber);
      formattedHC(initalHCNumber);
    }, parseInt(Math.random()*10)*1000)
  }


});