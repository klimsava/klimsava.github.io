$(function() {

$('.carousel-trevel').owlCarousel({
	loop: true,
	nav: true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	items: 1
});

$('#videoimg, .company-video__link').click(function(){
var height=$('#videoimg').height(),
	width =$('#videoimg').width();
$('.company-video').html('<iframe width="'+ width +'" height="' + height + '" src="https://www.youtube.com/embed/rXLmt6i-hBY?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
});

$('.header-btn__link').click(function() {
$('html, body').animate({scrollTop: $('.section-description').offset().top }, 'slow');
	return false;
});


});

$(document).ready( function() {
	var fsvs = $.fn.fsvs({
		speed : 5000,
		bodyID : 'fsvs-body',
		selector : '> .slide',
		mouseSwipeDisance : 40,
		afterSlide : function(){},
		beforeSlide : function(){},
		endSlide : function(){},
		mouseWheelEvents : true,
		mouseDragEvents : true,
		touchEvents : true,
		arrowKeyEvents : true,
		pagination : true,
		nthClasses : false,
		detectHash : true
	});
});

