'use strict';

var $ = require('jquery');
$('#tabs-bar').on('click', 'a', function (e) {
  var $target = $(e.currentTarget);
  if ($target.hasClass('active')) {
    return;
  }
  var $active = $target.siblings('.active').removeClass('active');
  if ($active.length) {
    $($active.data('rel')).addClass('hidden');
  }
  $($target.addClass('active').data('rel')).removeClass('hidden');
});

// if (module.hot) {
//   module.hot.accept();
// }
