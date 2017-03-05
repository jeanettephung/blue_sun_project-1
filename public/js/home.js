$(document).ready(function(){
	
	//set height of border
	$( window ).resize(function() {
		var height = $(".row.border-between").height();
		var result = height+"px";

		if (window.matchMedia('(max-width: 768px)').matches) {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: 0px;}</style>");
		} else {
			$("#home").append("<style>.border-between > [class*='col-']:before {height: "+result+";}</style>");
		}
	});
});