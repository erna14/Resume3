const buttonScrollToTop = document.querySelector("#buttonScrollToTop");

buttonScrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    });

    //$("html, body").animate({scrollTop:0},"slow");
});

//const fade = document.querySelectorAll('.fade');



/*$(window).on("load", function() {
    $(window).scroll(function(){
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".introPt1").each(function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
              }
        });
    }).scroll();
});*/