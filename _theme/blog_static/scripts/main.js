"use strict";!function(){var o=$(document),l=$("header");$(window).on("scroll",function(){o.scrollTop()>80?l.addClass("sticky"):l.removeClass("sticky")})}(),function(){$("body").scrollspy({target:"#global-navigation",offset:100}),$(".panel.panel-toggle .panel-heading").on("click",function(){$(this).toggleClass("is-close"),$(this).next(".panel-body").slideToggle()}),$(window).width()<768&&$(".panel.panel-toggle .panel-heading").trigger("click")}(),function(){$("#countdown .countdown-clock").countdown("2016/12/04 00:10:00").on("update.countdown",function(o){$(this).html(o.strftime('<div class="countdown-clock-display"><div class="countdown-clock-number">%-D</div><div class="countdown-clock-label">Days</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%H</div><div class="countdown-clock-label">Hours</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%M</div><div class="countdown-clock-label">Minutes</div></div><div class="countdown-clock-display"><div class="countdown-clock-number">%S</div><div class="countdown-clock-label">Seconds</div></div>'))}).on("finish.countdown",function(){$(this).addClass("disabled")}),$("#top-news .col-sm-3").tile(4);var o=$("body");$("#return-pagetop a").smoothScroll(),$(".navbar-scroll a").smoothScroll({beforeScroll:function(){o.addClass("smooth-scroll-scrolling"),$(".navbar-collapse.collapse.in").collapse("hide")},afterScroll:function(){o.removeClass("smooth-scroll-scrolling")}})}();