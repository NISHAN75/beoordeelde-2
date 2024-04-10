(function ($) {

    $(document).ready(function() {

        $('.appointment-btn').click(function(){
            $(".appointment-area").toggleClass("active");
        });

        // responsive burger 
        $('.burger').click(function(){
            $(".header").toggleClass("active");
        });

        $('.nav__inner-dropdown').click(function(){
            $(this).toggleClass("active");
        });

        $('.side').theiaStickySidebar();

        $('.slick-track').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });

        // scroll 
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            let headerHeight = $('.header').height();
            // Check if user has scrolled
            if (scroll > headerHeight) {
                $('.header').addClass('sticky');
            } else {
                $('.header').removeClass('sticky');
            }
        });

        // pagination 
        function updateProgressBar() {
            var windowHeight = $(window).height();
            var fullHeight = $(document).height();
            var scrolled = $(window).scrollTop();

            var progress = (scrolled / (fullHeight - windowHeight)) * 100;

            $('.headerBot__scroll').width(progress + '%');
        }

        // Call the function on scroll
        $(window).scroll(updateProgressBar);

        // Call the function on resize
        $(window).resize(updateProgressBar);

        // appointment
        $('.Offerte-btn').click(function(){

            let 



        })

        





    });
})(jQuery);
