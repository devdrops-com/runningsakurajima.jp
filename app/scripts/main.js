// // 何しているのか不明
// (function() {
//   'use strict';
//   var id = location.hash.replace('#', '');
//   if (id) {
//     var div = document.createElement('div'),
//       a = document.createElement('a');
//     a.setAttribute('name', id);
//     div.appendChild(a);
//     document.write(div.innerHTML);
//   }
// })();
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
// // common bottom
// (function() {
//   'use strict';
//   var $body = $('body'),
//     id = location.hash.replace('#', ''),
//     $target = id
//       ? $($.find('#' + id))
//       : undefined,
//     stopReplacingState = $target && $target.length,
//     $navbarTarget = id
//       ? $($.find('.navbar-right a[href="#' + id + '"]')).parent()
//       : undefined;
//   if (id) {
//     $($.find('body > a[name="' + id + '"]')).remove();
//   }
//   $body.scrollspy({target: '.navbar-right', offset: 100});
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
  // $('body').scrollspy({target: '#global-navigation', offset: 100});
  // このページの先頭に戻る
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#return-pagetop').fadeIn('slow');
    } else {
      $('#return-pagetop').fadeOut('slow');
    }
  });
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
  // カウントダウン
  $('#countdown .countdown-clock').countdown('2016/12/04 00:10:00').on('update.countdown', function(event) {
    $(this).html(event.strftime('<div class="countdown-clock-display"><div class="countdown-clock-number">%-D</div><div class="countdown-clock-label">Days</div></div>' +
      '<div class="countdown-clock-display"><div class="countdown-clock-number">%H</div><div class="countdown-clock-label">Hours</div></div>' +
      '<div class="countdown-clock-display"><div class="countdown-clock-number">%M</div><div class="countdown-clock-label">Minutes</div></div>' +
      '<div class="countdown-clock-display"><div class="countdown-clock-number">%S</div><div class="countdown-clock-label">Seconds</div></div>'));
  }).on('finish.countdown', function() {
    $(this).addClass('disabled');
  });
  // ニュースのサムネイルの高さを揃える
  if ($(window).width() >= 992) {
    // $('#top-news [class^="col-] > a').tile(4);
    $('#top-news [class^="col-sm"] > a').tile(4);
  }
  // スマートフォンの時のグローバルナビゲーションの動き
  var $body = $('body');
  $('#return-pagetop a').smoothScroll();
  $('.navbar-scroll a').smoothScroll({
    beforeScroll: function() {
      $body.addClass('smooth-scroll-scrolling');
      $('.navbar-collapse.collapse.in').collapse('hide');
    },
    afterScroll: function() {
      $body.removeClass('smooth-scroll-scrolling');
    }
  });
  function shuffleContent(container) {
    var content = container.find('> *');
    var total = content.length;
    content.each(function() {
      content.eq(Math.floor(Math.random() * total)).prependTo(container);
    });
  }
  shuffleContent($('#footer-ad > .row'));
})();
