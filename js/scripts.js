$(document).ready(function(){
  // Initialize Tooltip
  //$('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar li.menu a, a.navbar-brand, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  $("#book-table").click(function(event){
    event.preventDefault();

    $("html, body").animate({ scrollTop: $("#reservations").offset().top }, 800);
  });

  $("#see-menu").click(function(event){
    event.preventDefault();

    $("html, body").animate({ scrollTop: $("#menu").offset().top }, 800);
  });

   function header (e) {
    e.preventDefault();

    var scrollh = $(this).scrollTop();
    var winWidth = $(window).width();

    if (scrollh === 0 && winWidth > 767) {
        $(".navbar").css({
            'min-height':'110px',
            'background-color': 'rgba(0,0,0,.5)',
            'transition': 'all .5s'
        });
        $(".navbar .navbar-brand").css({
            'line-height': '65px',
            'transition': 'all .5s'
        });
        $(".navbar li a").css({
            'line-height': '65px',
            'transition': 'all .5s'
        });
        $(".navbar-toggle").css({
          'margin-top': '30px',
          'transition': 'all .5s'
        });
        
    } else {
        $(".navbar").css({
            'min-height':'55px',
            'background-color': 'rgba(0,0,0,.7)',
        });
        $(".navbar .navbar-brand").css({
            'line-height': '20px'
        });
        $(".navbar li a").css({
            'line-height': '20px'
        });
        $(".navbar-toggle").css({
          'margin-top': '8px'
        });
    }
  }

  $(window).scroll(header);
  $(window).resize(header);

})
