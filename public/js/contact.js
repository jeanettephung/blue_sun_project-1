$(document).ready(function() {
	if (screen.width>992) {
		var h = $("#contact_map").height();
		$("#front-image").css("height", h - 205);
	}
});

function initMap() {
	var uluru = {lat: 32.8250641, lng: -117.15585 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 19,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

window.onresize = function() {
	if ($(window).width()>992) {
		var h = $("#contact_map").height();
		$("#front-image").css("height", h - 205);
	}
};