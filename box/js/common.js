
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

//block-number
$(document).ready(function() {

  var products = [];
$.get('/like.json', function(data) {
products = data;
console.log(products);
for (var i=0; i<products.tovars.length; i++){
  $('.box-carts[data-id="'+products.tovars[i].id+'"]').find('.count').text(products.tovars[i].liker);

}
});

  if ($.cookie('likes')){

  var massiveLiked = $.cookie('likes').split(',');
  for (var i=0; i<massiveLiked.length; i++){
    $('.box-carts[data-id="'+massiveLiked[i]+'"]').addClass('liked');
  }
}






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

// 2 open the button
$('.tovar2').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar2').fadeIn();
  $('.js-overlay-tovar2').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar2').click(function(){
  $('.js-overlay-tovar2').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 3 open the button
$('.tovar3').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar3').fadeIn();
  $('.js-overlay-tovar3').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar3').click(function(){
  $('.js-overlay-tovar3').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 4 open the button
$('.tovar4').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar4').fadeIn();
  $('.js-overlay-tovar4').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar4').click(function(){
  $('.js-overlay-tovar4').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 5 open the button
$('.tovar5').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar5').fadeIn();
  $('.js-overlay-tovar5').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar5').click(function(){
  $('.js-overlay-tovar5').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 6 open the button
$('.tovar6').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar6').fadeIn();
  $('.js-overlay-tovar6').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar6').click(function(){
  $('.js-overlay-tovar6').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 7 open the button
$('.tovar7').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar7').fadeIn();
  $('.js-overlay-tovar7').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar7').click(function(){
  $('.js-overlay-tovar7').fadeOut();
  $('.wrap').css('filter', 'none');
});

// 8 open the button
$('.tovar8').click(function(){
  $('.wrap').css('filter', 'blur(5px)');
  $('.js-overlay-tovar8').fadeIn();
  $('.js-overlay-tovar8').addClass('disabled');

});

//closing for a dagger
$('.js-close-tovar8').click(function(){
  $('.js-overlay-tovar8').fadeOut();
  $('.wrap').css('filter', 'none');
});



//like

// $('.box-desc__like').click(function(e){
//   e.preventDefault();
//   var massivLike = [];
//   var count = parseInt($(this).children('.count').text());
//   var tovars = [];

  

// $(this).parent('.box-desc').parent('.box-carts').toggleClass('liked');
// if($(this).parent('.box-desc').parent('.box-carts').hasClass('liked')){
//   count++;
//   $(this).children('.count').text(count);

// } else {
//   count--;
//   $(this).children('.count').text(count);
// }
// $('.box-carts').each(function(index, elem){
//   tovars[index] = {'id':parseInt($(elem).attr('data-id')),'liker':parseInt($(elem).find('.count').text())};
//   if($(elem).hasClass('liked')){
//   massivLike.push($(elem).attr('data-id'));
// }
// });

// $.ajax({
//             type: 'GET',
//             url:  '/savetojson.php',
//             data: 'data={"tovars":' + JSON.stringify(tovars) + '}',
//             success: function(data){
//               console.log('zaebis');
// }
//         });


//     $.cookie("likes", massivLike); 
// });



// $('.like-modal').click(function(e){
//   e.preventDefault();
//   var massivLike = [];
//   var count = parseInt($(this).siblings('.box-desc').children('.box-desc__like').children('.count').text());

  

// $(this).parent('.box-carts').toggleClass('liked');
// if($(this).parent('.box-carts').hasClass('liked')){
//   count++;
//   $(this).siblings('.box-desc').children('.box-desc__like').children('.count').text(count);

// } else {
//   count--;
//   $(this).siblings('.box-desc').children('.box-desc__like').children('.count').text(count);
// }
// $('.box-carts').each(function(index, elem){
//   if($(elem).hasClass('liked')){
//   massivLike.push($(elem).attr('data-id'));
// }
// });
//     $.cookie("likes", massivLike); 
// });







