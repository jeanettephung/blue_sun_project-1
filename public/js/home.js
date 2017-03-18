$(document).ready(function(){


	$("#img1").attr('src', "https://i32.photobucket.com/albums/d28/redmoonnoodlehouse/schezuan_chicken_zps4y4hjhr4.png");
    $("#img2").attr('src', "https://i32.photobucket.com/albums/d28/redmoonnoodlehouse/beef_chicken_with_green_beans_zpsyxvpqfyn.png");
    $("#img3").attr('src', "https://i32.photobucket.com/albums/d28/redmoonnoodlehouse/noodle_dish_zpspty1l99j.png");
    $("#img4").attr('src', "https://i32.photobucket.com/albums/d28/redmoonnoodlehouse/mapo_tofu_zpshorcyrhg.png");
    $("#img5").attr('src', "https://i32.photobucket.com/albums/d28/redmoonnoodlehouse/tan_tan_noodles_zpss90izt2n.png");
	
	//set height of border
	function borderHeight() {
		var height = $(".row.border-between").height();
		var result = height+"px";

		if (window.matchMedia('(max-width: 768px)').matches) {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: 0px;}</style>");
		} else {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: "+result+";}</style>");
		}
	}
	
	function headerHeight() {
		var headerHeight = $("#featuredCarousel").height();
		var itemHeight = $("#featuredCarousel .item.active img").height();
		if (headerHeight > itemHeight) {
			$('#featuredCarousel').css("height", itemHeight);
		}
		else if (itemHeight > headerHeight) {
			$('#featuredCarousel').css("height", "450px");
		}
		else {
			headerHeight = 450;
		}
	}
	
	// set height of border on page load and resize
	borderHeight();
	$( window ).resize(function() {
		borderHeight();
	});
	
	headerHeight();
	$( window ).resize(function() {
		headerHeight();
	});
});