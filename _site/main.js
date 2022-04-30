// A $( document ).ready() block.
$( document ).ready(function() {

  $('.hamburger-button').click(function(){
  
    $('.mob-menubar').toggleClass("active");
    
  });

  // Animate on scroll / activate
  AOS.init();

});


lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false,
  animateThumb: true,
  thumbnail: true,
  zoomFromOrigin: true,
  allowMediaOverlap: true,
  toggleThumb: true,

});


lightGallery(document.getElementById('lightgallery-2'), {
  speed: 500,
  download: false
});




