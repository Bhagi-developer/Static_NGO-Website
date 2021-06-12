$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $('.donate-btn').click(function(){
    alert("thank you for donating");
  })

  
  $(".donate-Amount").click(function(){
$(this).toggleClass("donated");
  })


});