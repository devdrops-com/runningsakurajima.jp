"use strict";!function(){var o=$(document),l=$("header");$(window).on("scroll",function(){o.scrollTop()>80?l.addClass("sticky"):l.removeClass("sticky")})}(),function(){$(window).scroll(function(){$(window).scrollTop()>100?$("#return-pagetop").fadeIn("slow"):$("#return-pagetop").fadeOut("slow")}),$(".panel.panel-toggle .panel-heading").on("click",function(){$(this).toggleClass("is-close"),$(this).next(".panel-body").slideToggle()}),$(window).width()<768&&$(".panel.panel-toggle .panel-heading").trigger("click")}(),function(){function o(o){var l=o.find("> *"),n=l.length;l.each(function(){l.eq(Math.floor(Math.random()*n)).prependTo(o)})}$("#countdown .countdown-clock").countdown("2016/12/04 00:10:00").on("update.countdown",function(o){$(this).html(o.strftime('<div class="countdown-clock-display"><div class="countdown-clock-number">%-D</div><div class="countdown-clock-label">Days</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%H</div><div class="countdown-clock-label">Hours</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%M</div><div class="countdown-clock-label">Minutes</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%S</div><div class="countdown-clock-label">Seconds</div></div>'))}).on("finish.countdown",function(){$(this).addClass("disabled")}),$(window).width()>=992&&$('#top-news [class^="col-sm"] > a').tile(4);var l=$("body");$("#return-pagetop a").smoothScroll(),$(".navbar-scroll a").smoothScroll({beforeScroll:function(){l.addClass("smooth-scroll-scrolling"),$(".navbar-collapse.collapse.in").collapse("hide")},afterScroll:function(){l.removeClass("smooth-scroll-scrolling")}}),o($("#footer-ad > .row"))}();