$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('#nav').css('opacity', (25-scroll)/25)
});
