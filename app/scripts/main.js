(function() {
  'use strict';
  $('#top-news .col-sm-3').tile(4);
  $(function() {
    var $body = $('body');
    $('.navbar-scroll a').smoothScroll({
      beforeScroll: function() {
        $body.addClass('smooth-scroll-scrolling');
        $('.navbar-collapse.collapse.in').collapse('hide');
      },
      afterScroll: function() {
        $body.removeClass('smooth-scroll-scrolling');
      }
    });
  });
})();
