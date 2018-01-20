'use strict';

var $ = require('jquery');
$('#tabs-bar').on('click', 'li', function (e) {
  var $target = $(e.currentTarget);
  if ($target.hasClass('active')) {
    return;
  }
  var $active = $target.siblings('.active').removeClass('active');
  if ($active.length) {
    $($active.data('rel')).removeClass('restore');
  }
  $($target.addClass('active').data('rel')).addClass('restore');
});

// if (module.hot) {
//   module.hot.accept();
// }
