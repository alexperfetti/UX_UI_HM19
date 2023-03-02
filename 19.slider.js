$(document).ready(function(){
    $('.next').on('click', function(){
        console.log('clicked');
        var currentImg = $('.active');
        var nextImg = currentImage.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
    $('.prev').on('click', function(){
        console.log('clicked');
        var currentImg = $('.active');
        var prevImg = currentImage.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
});
});