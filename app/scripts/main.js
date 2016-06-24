// 何しているのか不明
(function() {
  'use strict';
  var id = location.hash.replace('#', '');
  if (id) {
    var div = document.createElement('div'),
      a = document.createElement('a');
    a.setAttribute('name', id);
    div.appendChild(a);
    document.write(div.innerHTML);
  }
})();
// common head グローバルナビの高さ調整
(function() {
  'use strict';
  var $document = $(document);
  var $header = $('header');
  $(window).on('scroll', function() {
    if ($document.scrollTop() > 80) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });
})();
// common bottom
// (function() {
//   'use strict';
//
//   var $body = $('body'),
//     id = location.hash.replace('#', ''),
//     $target = id
//       ? $($.find('#' + id))
//       : undefined,
//     stopReplacingState = $target && $target.length,
//     $navbarTarget = id
//       ? $($.find('.navbar-right a[href="#' + id + '"]')).parent()
//       : undefined;
//
//
//   if (id) {
//     $($.find('body > a[name="' + id + '"]')).remove();
//   }
//   // $body.scrollspy({target: '.navbar-right', offset: 100});
//   if (history.replaceState) {
//     $('.navbar-right').on('activate.bs.scrollspy', function() {
//       if (stopReplacingState) {
//         return;
//       }
//       var $active = $('.navbar-right .active a');
//       if ($active.is(':visible')) {
//         history.replaceState('', '', $active.prop('href').replace(/.*#/, '#'));
//       } else {
//         history.replaceState('', '', location.href.replace(/#.*/, ''));
//       }
//     });
//   }
//   if (!$target || !$target.length) {
//     return;
//   }
//   $navbarTarget.addClass('force-active');
//   $target.prop('id', '');
//   $(window).load(function() {
//     setTimeout(function() {
//       $target.prop('id', id);
//       var pos = $target.offset().top - 50;
//       $body.addClass('smooth-scroll-scrolling');
//       $('html, body').animate({
//         scrollTop: pos
//       }, 750, 'swing', function() {
//         stopReplacingState = false;
//         $body.removeClass('smooth-scroll-scrolling');
//         $navbarTarget.removeClass('force-active');
//       });
//     }, 300);
//   });
// })();
// 共通
(function() {
  'use strict';
  $('body').scrollspy({target: '#navbar-example'})
  // $('body').scrollspy({target: '.navbar-collapse.collapse.navbar-right', offset: 100});
  // パネルをトグル化
  $('.panel.panel-toggle .panel-heading').on('click', function() {
    $(this).toggleClass('is-close');
    $(this).next('.panel-body').slideToggle();
  });
  if ($(window).width() < 768) {
    $('.panel.panel-toggle .panel-heading').trigger('click');
  }
})();
// トップページ
(function() {
  'use strict';
  $('#clock').countdown('2016/12/09 00:10:00').on('update.countdown', function(event) {
    var format = '%H:%M:%S';
    if (event.offset.days > 0) {
      format = '%-d day%!d ' + format;
    }
    if (event.offset.weeks > 0) {
      format = '%-w week%!w ' + format;
    }
    $(this).html(event.strftime(format));
  }).on('finish.countdown', function(event) {
    $(this).html('This offer has expired!').parent().addClass('disabled');
  });
  //ニュースのサムネイルの高さを揃える
  $('#top-news .col-sm-3').tile(4);
  // スマートフォンの時のグローバルナビゲーションの動き
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
})();
