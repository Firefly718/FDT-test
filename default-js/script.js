// slider
$(document).ready(function(){
  $('.comments__slider').slick({
    dots: false,
    arrows: true,
    prevArrow: '<div class="comments__slider--left"></div>',
    nextArrow: '<div class="comments__slider--right"></div>'
  });
});

$(document).ready(function(){
  $('.banner-third__slider').slick({
    dots: true,
    arrows: false,
    prevArrow: '<div class="comments__slider--left"></div>',
    nextArrow: '<div class="comments__slider--right"></div>'
  });
});