$(document).ready(function(){
	
	/* Show active page on navigation bar */
	var ul = document.getElementById("grab_nav");
  var items = ul.getElementsByTagName("li");

  for (i=0; i< items.length; i++){
    var current_nav = $(items[i]).find('a').attr("href");
    if ( current_nav == window.location.pathname) {
      $(items[i]).addClass("active_page");
    }
  }

});
