$(() => {
    // Основной слайдер на главной

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });





    $('.first_slider-items').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows:'.slider-arrows',
        prevArrow: "<img src='images/arrow-prev.svg'>",
        nextArrow: "<img src='images/arrow-next.svg'>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });



      $('body').on('click', '.modal_btn', function (e) {
        e.preventDefault()

        Fancybox.close()

        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline'
        }])
    })




})