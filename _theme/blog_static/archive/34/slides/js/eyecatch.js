$(function(){
	$('#eyecatch').slides({
		preload: true,
		preloadImage: 'slides/img/loading.gif',
		play: 7000,
		pause: 2500,
		hoverPause: true,
		effect: 'fade',
		generateNextPrev: true,
		generatePagination: true,
		fadeSpeed: 600
	});
});
