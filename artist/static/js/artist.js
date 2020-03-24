var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//Scroll effect

(function(){
  var timeout;
  var $window = $(window);
  var $title = $('.scroll_title');

  $window.on('scroll', function(e){
    clearTimeout(timeout);

    timeout = setTimeout(function(){
      if ($window.scrollTop() < 3000 || $window.scrollTop() > 6500) {
        $title.removeClass('show');
      } else {
        $title.addClass('show');
      }
    }, 100);
  });
}());
