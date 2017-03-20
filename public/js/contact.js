/**
 * Created by arnoldchen on 3/19/17.
 */
$(document).ready(function() {
    console.log("google");

    if (screen.width>992) {
        var h = $("#contact_map").height();
        console.log(h);
        $("#front-image").css("height", h - 205);
        console.log($("#contact_content").height());
    }
});

window.onresize = function() {
    if ($(window).width()>992) {
        console.log("cool");
        var h = $("#contact_map").height();
        console.log(h);
        $("#front-image").css("height", h - 205);
        console.log($("#contact_content").height());
    }

};