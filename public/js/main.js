$(document).ready(function(){

	//featured dishes slider initialisation
	/*$("#dishes").carouFredSel({
		circular: true,
		infinite: false,
		auto 	: false,
		prev	: {	
			key		: "left"
		},
		next	: { 
			key		: "right"
		},
		pagination	: "#slider_nav"
	});*/
	//console.log(window.location.pathname);



    var ul    = document.getElementById("grab_nav");
    var items = ul.getElementsByTagName("li");

    for (i=0; i< items.length; i++){
        var current_nav = $(items[i]).find('a').attr("href");
        if ( current_nav == window.location.pathname) {
            $(items[i]).addClass("active_page");
        }
    }







});
