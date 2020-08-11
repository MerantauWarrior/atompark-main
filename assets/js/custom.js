//Helpers
document.addEventListener("touchstart", function () {
}, true);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  console.log('you use mobile');
}
//Progress
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector('.progress__bar').style.width = scrolled + "%";
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function () {
  //Header
  $('.header-submenu__list-link').hover(function () {
    var srcImg = $(this).data('img')
    if (typeof srcImg !== typeof undefined && srcImg !== false) {
      $('.header-submenu-product img').attr('src', srcImg);
    }
  }, function () {
    $('.header-submenu-product img').attr('src', 'assets/img/general/placeholder.png');
  })
  $('.header-lang span').click(function () {
    $('.header-lang__select').fadeToggle(250);
  });
  //header mobile
  if ($(window).width() < 768) {
    var lastScrollTop = 0;
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (st > window.innerHeight / 2) {
          $('.header-search').fadeOut(250);
        }
      } else {
        $('.header-search').fadeIn(250);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, {passive: true});
    $('.header-mobile-menu-toggle').click(function () {
      $('body').toggleClass('ovh');
      $('.header').toggleClass('header-navigation_opened');
    });
    $('.header-menu__link').click(function (e) {
      if (typeof $(this).attr('href') !== typeof undefined && $(this).attr('href') !== false) {
        return true;
      } else {
        e.preventDefault();
        $(this).toggleClass('header-menu__link_active');
        $(this).siblings('.header-submenu').slideToggle(250);
      }
    })
    $('.header-submenu__top').click(function () {
      $(this).toggleClass('header-submenu__top_active');
      $(this).siblings('.header-submenu__list').slideToggle(250);
    })
  } else {
    $(window).off("scroll");
  }
  //Footer
  $('.footer-menu__arrow').click(function () {
    $(this).toggleClass('footer-menu__arrow_opened');
    $(this).parent().parent().find('.footer-menu__list').slideToggle(250);
  });
  //Video
  if($('.video').length > 0){
    $('.video-play').click(function () {
      $(this).hide();
      $(this).parent().addClass('video_playing');
      $(this).siblings('iframe').attr('src', $(this).siblings('iframe').data('src'));
    });
  }
  //Faqs
  if ($('.faqs-item').length > 0) {
    $('.faqs-item__question').click(function () {
      $('.faqs-item__question').not($(this)).removeClass('faqs-item__question_opened');
      $('.faqs-item__question').not($(this)).siblings('.faqs-item__content').slideUp(250);
      $(this).toggleClass('faqs-item__question_opened');
      $(this).siblings('.faqs-item__content').slideToggle(250);
    });
  }
  //Modal
  if($('.modal').length > 0){
    $('.modal, .modal__close').click(function (event) {
      event.stopPropagation();
      if (event.target === this) {
        $('.modal').hide();
        $('body').removeClass('ovh');
      }
    });
  }
  // Reviews
  if($('.reviews-slider').length > 0){
    $('.reviews-slider').slick({
      infinite: false,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.reviews-slider').parent().find('.slider-arrow--prev'),
      nextArrow: $('.reviews-slider').parent().find('.slider-arrow--next'),
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
  }
  // Counter
  if($('.js-counter').length > 0){
    function formattedHC(initalHCNumber) {
      $('.js-counter').text(initalHCNumber.toString().replace(/^(\d+)(\d{3})(\d{3})$/g, '$1, $2 $3'));
    }
    var initalHCNumber = parseInt(localStorage.getItem('homeCounter') ? localStorage.getItem('homeCounter') : 1000000);
    formattedHC(initalHCNumber);
    setInterval(function () {
      initalHCNumber = initalHCNumber + parseInt(Math.ceil(Math.random() * 10));
      localStorage.setItem('homeCounter', initalHCNumber);
      formattedHC(initalHCNumber);
    }, parseInt(Math.ceil(Math.random() * 10)) * 1000);
  }

});