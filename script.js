var programmingSkills = {
    HTML:80,
    Javascript:20,
    CSS:70
}


document.getElementById("html").style.height = programmingSkills["HTML"] + "%";
document.getElementById("css").style.height = programmingSkills["CSS"] + "%";
document.getElementById("js").style.height = programmingSkills["Javascript"] + "%";

jQuery(function($) {
    var currentMousePos = { x: -1, y: -1 };

    $("#html").on('mouseenter', function(event){
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        document.getElementById("HoverText").style.animation = "FadeIn 1s";
        document.getElementById("HoverText").innerHTML = programmingSkills["HTML"] + "%";
        
        var position = $('#html').position();
        var percentLeft = position.left/$(window).width() * 100;
        var position = $('#htmlText').position();
        var percentTop = position.top/$(window).height() * 100;

        document.getElementById("HoverText").style.top = percentTop - 5 + "%";
        document.getElementById("HoverText").style.left = percentLeft + 1 + "%"; //$("#js").offset().left
        
        
    })
    $("#css").on('mouseenter', function(event){
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        document.getElementById("HoverText").style.animation = "FadeIn 1s";
        document.getElementById("HoverText").innerHTML = programmingSkills["CSS"] + "%";
        
        var position = $('#css').position();
        var percentLeft = position.left/$(window).width() * 100;
        var position = $('#cssText').position();
        var percentTop = position.top/$(window).height() * 100;

        document.getElementById("HoverText").style.top = percentTop - 5 + "%";
        document.getElementById("HoverText").style.left = percentLeft + 1 + "%"; //$("#js").offset().left
    })
    $("#js").on('mouseenter', function(event){
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        document.getElementById("HoverText").style.animation = "FadeIn 1s";
        document.getElementById("HoverText").innerHTML = programmingSkills["Javascript"] + "%";

        var position = $('#js').position();
        var percentLeft = position.left/$(window).width() * 100;
        var position = $('#jsText').position();
        var percentTop = position.top/$(window).height() * 100;

        document.getElementById("HoverText").style.top = percentTop - 5 + "%";
        document.getElementById("HoverText").style.left = percentLeft + 1 + "%"; //$("#js").offset().left
    })

    $("#html").on('mouseleave', function(event){
        document.getElementById("HoverText").style.animation = "FadeOut 1s";
    })
    $("#css").on('mouseleave', function(event){
        document.getElementById("HoverText").style.animation = "FadeOut 1s";
    })
    $("#js").on('mouseleave', function(event){
        document.getElementById("HoverText").style.animation = "FadeOut 1s";
    })

})