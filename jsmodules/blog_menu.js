$(document).ready(function(){
  $('.menu-item').click(function(){
    var innerItem = $(this).children();
    innerItem.slideToggle('fast');
    console.log($(this).css("height"));
    // if ($(this).css("height")=="105px"){
    //   $(this).animate({height:"9em"}, 200);
    // }
    // else{
    //   $(this).animate({height:"5em"}, 200);
    // }
  })
})