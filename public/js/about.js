$(document).ready(function(){
	
	function matchHeight() {
		insideH = $(".inside").height();
		$(".victor").css("height", insideH);
	}
	
	function displayImg() {
		var winW = $(window).width();

		if (winW > 767) {
			$(".victor").css("display", "none");
		} else {
			$(".victor").css("display", "inherit");
		}
	}

	matchHeight();
	displayImg();
	
	$(window).resize(function() {
		matchHeight();
		displayImg();
	});
	
	// adjust placement of footer 
	var bodyHeight = $(window).height() - $("#footer").height();
	$("body").css("min-height", bodyHeight);
});