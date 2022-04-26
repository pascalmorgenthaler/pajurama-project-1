// A $( document ).ready() block.
$( document ).ready(function() {

  $('.hamburger-button').click(function(){
  
    $('.mob-menubar').toggleClass("active");
    
  });

  // Animate on scroll / activate
  AOS.init();

});





