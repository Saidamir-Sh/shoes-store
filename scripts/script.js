// jQuery effects 

$('.shoes').waypoint(function(direction) {
    $('.shoes').addClass('animate__pulse');
}, {
    offset: '100%'
});

$('.card').waypoint(function(direction) {
    $('.card').addClass('animate__flipInX');
}, {
    offset: '100%'
});
$('.motive').waypoint(function(direction) {
    $('.motive').addClass('animate__fadeInUp');
}, {
    offset: '100%'
});
$('.about-nike').waypoint(function(direction) {
    $('.about-nike').addClass('animate__fadeInUp');
}, {
    offset: '100%'
});

$('.map').waypoint(function(direction) {
    $('.map').addClass('animate__fadeIn');
}, {
    offset: '100%'
});

$('.contact').waypoint(function(direction) {
    $('.contact').addClass('animate__fadeInUp');
}, {
    offset: '100%'
});

