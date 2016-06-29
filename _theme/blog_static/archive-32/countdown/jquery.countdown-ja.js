/* http://keith-wood.name/countdown.html
   Japanese initialisation for the jQuery countdown extension
   Written by Ken Ishimoto (ken@ksroom.com) Aug 2009. */
(function($) {
	$.countdown.regional['ja'] = {
		labels: ['年', '月', '週', '日', '時間', '分', '秒'],
		labels1: ['年', '月', '週', '日', '時間', '分', '秒'],
		compactLabels: ['年', '月', '週', '日'],
		whichLabels: null,
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regional['ja']);
})(jQuery);

$(function () {
	var austDay = new Date();
	austDay = new Date(2012, 2 - 1, 26);
	$('#countdown').countdown({until: austDay,
	layout: '{d<}{dn} {dl} {d>}{h<}{hn} {hl} {h>}{m<}{mn} {ml} {m>}{s<}{sn} {sl}{s>}'});
});
