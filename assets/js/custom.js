$(document).ready(function(){
   /*Hire me Parallax JS*/
//    $('.class-name').functionName({
//        
//    });
    
    /*Hire Parallax JS*/
    $('.hire-area-start').parallax({
        imageSrc: '../image/hire.jpg',
    });
    

    $('.juse').click(function(){
        $('.juse').html('LEDP');
    });
    
    /*Testimonial JS*/
     $(".owl-carousel").owlCarousel({
         animateOut: 'fadeOut',
        animateIn: 'fadeInDown',
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    
    /*Portfolio JS*/
    var $grid = $('.grid').isotope({
          itemSelector: '.element-item',
          layoutMode: 'fitRows',
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
});
