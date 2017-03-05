$(document).ready(function(){
	
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
	
	// set height of border on page load and resize
	borderHeight();
	$( window ).resize(function() {
		borderHeight();
	});
});