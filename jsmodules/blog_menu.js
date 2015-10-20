$(document).ready(function(){
  $('.menu-item').click(function(){
    var innerItem = $(this).children();
    innerItem.slideToggle('fast');
    console.log($(this).css("height"));
    if ($(this).css("height")=="112px"){
      $(this).animate({height:"7em"}, 200);
    }
    else{
      $(this).animate({height:"4em"}, 200);
    }

  })


})