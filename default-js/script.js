// slider
$(document).ready(function(){
  $('.comments__slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="comments__slider--left"></div>',
    nextArrow: '<div class="comments__slider--right"></div>'
  });
});

$(document).ready(function(){
  $('.banner-third__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="comments__slider--left"></div>',
    nextArrow: '<div class="comments__slider--right"></div>'
  });
});