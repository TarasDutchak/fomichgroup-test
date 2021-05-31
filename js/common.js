$(document).ready(function () {
    // header submenu
    $('.dropdown span,.footermenu ul li span').click(function () {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.dropdown').length && !$target.closest('.submenu').length) {
            $('.dropdown').removeClass('open');
        }
    });

    // main slider

    var $status1 = $('.mainslider .pagingInfo .one');
    var $status2 = $('.mainslider .pagingInfo .two');
    var $slickElement = $('.mainslider .slidermain');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status1.text('0' + i);
            $status2.text(' / 0' + slick.slideCount);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' / ' + slick.slideCount);
            $status1.text(i);
            $status2.text(' / ' + slick.slideCount);
        }

    });

    $slickElement.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 2500,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1200
    });

    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    // right
    $('.mainslider .pagingInfowrapp').css('right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // right
        $('.mainslider .pagingInfowrapp').css('right', paddingContainer);
    });

    // events slider

    $('.events-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // GALLERY SLDIER 

    var $statusgal1 = $('.gallery .pagingInfo .one');
    var $statusgal2 = $('.gallery .pagingInfo .two');
    var $slickGallery = $('.galleryslider');

    $slickGallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $statusgal1.text('0' + i);
            $statusgal2.text(' / 0' + slick.slideCount);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' / ' + slick.slideCount);
            $statusgal1.text(i);
            $statusgal2.text(' / ' + slick.slideCount);
        }

    });

    $slickGallery.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 2500,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // autoplay: true,
        // autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1200,
    });

    // main blog sliders

    $('.blogslider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.blogslider-nav',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
    $('.blogslider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.blogslider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        arrows: false,

    });

    // adaptive menu
    $('.header__burgerbtn').click(function(){
        $('.mobmenu').addClass('show');
    });
    $('.closemenu').click(function(){
        $('.mobmenu').removeClass('show');
    });



});