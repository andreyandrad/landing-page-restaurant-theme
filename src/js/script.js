$(document).ready(function() {
    $('#mobile-button').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-button').find('i').toggleClass('fa-bars fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPos = $(window).scrollTop() - header.outerHeight();
        if (scrollPos <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

});
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

});             