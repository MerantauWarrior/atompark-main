//Helpers
document.addEventListener("touchstart", function () {
}, true);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  console.log('you use mobile');
}
//Progress
if(document.querySelectorAll('.progress__bar').length > 0){
  window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('.progress__bar').style.width = scrolled + "%";
  }
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Select
var x, i, j, selElmnt, a, b, c, img;
x = document.getElementsByClassName("select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  if (selElmnt.options[selElmnt.selectedIndex].getAttribute('data-icon') !== null) {
    a.innerHTML = '<img src="' + selElmnt.options[selElmnt.selectedIndex].getAttribute('data-icon') + '" alt=""><span>' + selElmnt.options[selElmnt.selectedIndex].innerHTML + '</span>';
  } else {
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  }
  if (selElmnt.disabled) {
    x[i].classList.add('select--disabled');
  }
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    if (selElmnt.options[j].getAttribute('data-icon') !== null) {
      c.innerHTML = '<img src="' + selElmnt.options[j].getAttribute('data-icon') + '" alt=""><span>' + selElmnt.options[j].innerHTML + '</span>';
      c.setAttribute('data-val',selElmnt.options[j].getAttribute('value'));
    } else {
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.setAttribute('data-val',selElmnt.options[j].getAttribute('value'));
    }
    c.addEventListener("click", function (e) {
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.textContent) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          h.setAttribute('data-val',s.options[i].getAttribute('value'));
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  if (selElmnt.disabled) {
    console.log('disabled');
  } else {
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

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
  $('.header-lang__switch').click(function () {
    $(this).toggleClass('header-lang__switch_active');
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