$(document).ready(function(){
	$('#slider').slick({
	  slidesToShow: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false, 
	  dots: true
	});	
	$('#slider2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});