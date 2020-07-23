//Helpers
document.addEventListener("touchstart", function () {
}, true);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  console.log('you use mobile');
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

});