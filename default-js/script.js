// slider (first page)
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

// slider (third page)
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

// burger
$(document).ready(function(){
  // $("body > header > div > div > div > div.header__nav").hide();

  $("body > header > div > div > div > div.burger").click(function(){
    $("body > header > div > div > div > div.header__nav").toggle('slow', 'swing');
    $("body > header > div > div > div > div.header__nav").css('display', 'flex');
  });
});
