/**
 * Created by robert on 2017-02-12.
 */
var distance = $('div').offset().top,
   $window = $(window);

$window.on('scroll', function() {
   if ( $window.scrollTop() == distance ) {
      $('#scroll-downs').fadeIn();
      //ero-image').css('background-color', '#272b30');
   }
   else {
      $('#scroll-downs').fadeOut();
      //$('#hero-image').css('background-color', '#fff');
   }
});
$(document).ready(function() {
  AOS.init({
  
  });
});
document.addEventListener('DOMContentLoaded', function() {
 Typed.new('.element', {
   strings: ["web artisan.^1000", "perfectionist.^1000", "freelance front-end developer.^1200"],
   typeSpeed: 50,
   loop: true
 });
});
