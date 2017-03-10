$(document).ready(function(){
		$('#return-to-top').hide();
	
		$(window).scroll(function() {
				if ($(this).scrollTop() >= 50) {
						$('#return-to-top').fadeIn(200);
				} else {
						$('#return-to-top').fadeOut(200);
				}
			
			if($(window).scrollTop() + $(window).height() < $(document).height() - $("#footer").height()){
					$('#return-to-top').css("position","fixed");    
					$('#return-to-top').css("bottom","0"); 
				 	$('#return-to-top').css("right","10px"); 
			 } else {
					$('#return-to-top').css("position","relative"); 
					$('#return-to-top').css("bottom","0px"); 
				 	$('#return-to-top').css("right","10px"); 
			 }
		});

		$('#return-to-top').click(function() {
				$('body,html').animate({
						scrollTop : 0
				}, 500);
		});
	
});