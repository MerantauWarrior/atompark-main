// documentation
$(document).ready(function () {
  $('.documentation-menu-item:first-child .documentation-menu__title').siblings('.documentation-submenu').slideDown(0);
  $('.documentation-menu__title').click(function () {
    $(this).siblings('.documentation-submenu').slideToggle(250);
  });


  $('pre').each(function (index, pre) {
    var preHtml = document.createElement('div');
    var preLines = document.createElement('div');
    var preCode = document.createElement('div');
    preHtml.classList.add('preCode');
    preLines.classList.add('preCode-lines');
    preCode.classList.add('preCode-text');
    var arrPre = pre.innerHTML.toString().split(/\r?\n/);
    $(pre).replaceWith(preHtml);
    for (var i = 0; i<arrPre.length; i++){
      if (arrPre[i] && arrPre[i].trim().length !== 0){
        preLines.innerHTML += '<div>'+parseInt(i+1)+'</div>';
        preCode.innerHTML += arrPre[i].replace(/"([^"]+)"/g, '<span class="preCode-value">"$1"</span>') + '\n';
      }
    }
    preHtml.appendChild(preCode);
    preHtml.appendChild(preLines);
    $('<span class="preCode-copy">copy</span>').appendTo(preHtml);
  });
  function copyClipboard(elm) {
    if(document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
    }
    else if(window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
  }
  $(document).on('click', '.preCode-copy', function () {
    copyClipboard($(this).parent().find('.preCode-text')[0]);
  });

});