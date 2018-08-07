$(function() {

	// Slider
 $('.sl').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	 autoplay: true
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.sl',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            }});
            return false;
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

//block-number
$(document).ready(function() {

$('.minus-btn').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
                         count = count < 1 ? 1 : count;
                         $input.val(count);
                         $input.change();
                         return false;
                         });
$('.plus-btn').click(function () {
    var $input = $(this).parent().find('input');
                 $input.val(parseInt($input.val()) + 1);
                 $input.change();
                 return false;
                 });
                 });

//modal window


//open the button
$('.js-button-campaign').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
	$('.js-overlay-compaign').fadeIn();
	$('.js-overlay-compaign').addClass('disabled');

});

//closing for a dagger
$('.js-close-campaign').click(function(){
	$('.js-overlay-compaign').fadeOut();
  $('.wrap').css('filter', 'none');
	
});
