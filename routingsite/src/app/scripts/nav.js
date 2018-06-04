$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('#nav').css('opacity', (25-scroll)/25)
    $('#welc').css('opacity', (200-scroll)/200)
});
