// burger for main page
$(document).ready(function(){
  $("body > header > div > div > div > div.burger").click(function(){
    console.log('click');
    $("body > header > div > div > div > div.header__nav").toggle('slow', 'swing');
    $("body > header > div > div > div > div.header__nav").css('display', 'flex');
  });
});
  
// burger for second page
$(document).ready(function(){
  $("body > header > div > div > div.burger.burger_sec").click(function(){
    console.log('click');
    $("body > header > div > div > div.header__menu.header__menu-sec > div").toggle('slow', 'swing');
    $("body > header > div > div > div.header__menu.header__menu-sec > div").css('display', 'flex');
  });
});
  
  // burger for third page
$(document).ready(function(){
  $("body > header > div > div > div.burger.burger_third").click(function(){
    console.log('click');
    $("body > header > div > div > div.header__menu.header__menu--third").toggle('slow', 'swing');
    $("body > header > div > div > div.header__menu.header__menu--third").css('display', 'flex');
  });
});
  
// burger example
// $(document).ready(function(){
//   $("").click(function(){
//     console.log('click');
//     $("").toggle('slow', 'swing');
//     $("").css('display', 'flex');
//   });
// });