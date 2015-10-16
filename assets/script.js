
window.onload = function() {
  var tid = null;
  var body = document.body;
  var menu_btn = document.querySelector('.nav_menu');
  var menu_drop = document.querySelector('.nav_drop');
  var cprop = 'className';

  function addClass( c, el ) {
    var cn = el[cprop];
    if( cn.indexOf( c ) !== -1 ) {
        return;
    }
    el[cprop] = (cn !== '') ? cn+' '+c : cn+c;
  };

  var removeClass = function(c, el) {
    el[cprop] = el[cprop].replace(new RegExp("(^|\\s+)" + c + "(\\s+|$)"), '');
  };

  function clickOpenMenu(e) {
    if(body.className.indexOf('menu_open') !== -1) {
      removeClass('menu_open', body);
    } else {
      addClass('menu_open', body);
    }
  }

  menu_btn.addEventListener('click', clickOpenMenu);
  menu_btn.addEventListener('touch', clickOpenMenu);

  menu_drop.addEventListener('mouseout', function(e) {
    tid = setTimeout(function() {
      removeClass('menu_open', body);
    }, 1000);
  });

  menu_drop.addEventListener('mouseover', function() {
    clearTimeout(tid);
  });

  // last set the loaded CSS class
  addClass('loaded', body);
};

