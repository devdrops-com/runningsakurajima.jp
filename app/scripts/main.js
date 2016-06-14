(function() {
  'use strict';
  // common
  var $document = $(document);
  var $header = $('header');
  $(window).on('scroll', function() {
    var scroll = $document.scrollTop();
    if (scroll > 80) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });
  // // common
  // var $body = $('body'),
  //   id = location.hash.replace('#', ''),
  //   $target = id
  //     ? $($.find('#' + id))
  //     : undefined,
  //   stopReplacingState = $target && $target.length,
  //   $navbarTarget = id
  //     ? $($.find('.navbar-right a[href="#' + id + '"]')).parent()
  //     : undefined;
  // if (id) {
  //   $($.find('body > a[name="' + id + '"]')).remove();
  // }
  // $body.scrollspy({target: '.navbar-right', offset: 100})
  // if (history.replaceState) {
  //   $('.navbar-right').on('activate.bs.scrollspy', function() {
  //     if (stopReplacingState) {
  //       return;
  //     }
  //     var $active = $('.navbar-right .active a');
  //     if ($active.is(':visible')) {
  //       history.replaceState('', '', $active.prop('href').replace(/.*#/, '#'));
  //     } else {
  //       history.replaceState('', '', location.href.replace(/#.*/, ''));
  //     }
  //   });
  // }
  // if (!$target || !$target.length) {
  //   return;
  // }
  // $navbarTarget.addClass('force-active');
  // $target.prop('id', '');
  // $(window).load(function() {
  //   setTimeout(function() {
  //     $target.prop('id', id);
  //     var pos = $target.offset().top - 50;
  //     $body.addClass('smooth-scroll-scrolling');
  //     $('html, body').animate({
  //       scrollTop: pos
  //     }, 750, 'swing', function() {
  //       stopReplacingState = false;
  //       $body.removeClass('smooth-scroll-scrolling');
  //       $navbarTarget.removeClass('force-active');
  //     });
  //   }, 300);
  // });
  // トップページ
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
