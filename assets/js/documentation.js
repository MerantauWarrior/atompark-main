// documentation
$(document).ready(function () {
  $('.documentation-menu-item:first-child .documentation-menu__title').siblings('.documentation-submenu').slideDown(0);
  $('.documentation-menu__title').click(function () {
    $(this).siblings('.documentation-submenu').slideToggle(250);
  });
});