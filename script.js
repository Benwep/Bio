function about(){
    window.location.href = "about.html";
}
var images = document.getElementsByClassName('stage');



jQuery(function ($) {
    $(".stage").mouseover(function (e) {
        var elementId = $(e.target).attr('id');
        console.log(elementId);

        var elementId = elementId + "Panel";
        element = document.getElementById(elementId);

        element.style.opacity = 1;
        element.style.animation = "fadeIn 1s";
        
    })
    $( "#2020" ).on( "mouseleave", function() {
        element.style.opacity = 0;
        element.style.animation = "fadeOut 1s"; 
    })
    $( "#2021" ).on( "mouseleave", function() {
        element.style.opacity = 0;
        element.style.animation = "fadeOut 1s"; 
    })
})
