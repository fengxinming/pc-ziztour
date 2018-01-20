'use strict';

var $ = require('jquery');
var $mainNav = $('#main-nav');
var $sidesNav = $('#sides-nav');
var $activeNav = $mainNav.find('li.active');
var $navLine = $activeNav.find('.nav-line');
var activeNum = $activeNav.index();
var WIDTH = $activeNav.outerWidth(true);

$mainNav.on('mouseenter', 'li', function (e) {
  var num = $(this).index() - activeNum;
  $navLine.css('transform', 'translateX(' + num * WIDTH + 'px)');
}).on('mouseleave', function () {
  $navLine.css('transform', '');
});

$(document).on('mousewheel DOMMouseScroll', function (e) {
  if ($mainNav[0].getBoundingClientRect().top < -window.screen.height / 2) {
    if (!$sidesNav.isShow) {
      $sidesNav.show();
      $sidesNav.isShow = true;
    }
  } else if ($sidesNav.isShow) {
    $sidesNav.hide();
    $sidesNav.isShow = false;
  }
});
