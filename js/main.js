
// Collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//  animation

AOS.init({
    duration:2000
});

//  slider
$('.feature-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// our work mixitup
var confi=document.querySelector('.mixcount');
var mixer=mixitup(confi);

// couter up

jQuery(document).ready(function($) {
    $('.counter').counterUp({
            delay: 10,
            time: 5000
        });
});
