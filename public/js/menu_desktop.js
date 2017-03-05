$(document).ready(function(){

	// remove all classes (active)
	function refresh() {
		$('.menu-cat').each(function() { 
			$(this).addClass('inactive_cat');
		});
		$('.category_menu').each(function() { 
			$(this).removeClass('active').addClass('inactive_btn');
		});
	}
	
	// initially makes first menu active
	function select(category, menu) {
		$(category).removeClass('inactive_btn').addClass('active');
		$(menu).removeClass('inactive_cat');
	}
	
	// onclick, scroll menu to top
	function scrollTop(menu) {
		$(menu).click(function() {
			$('html, body').animate({
					scrollTop: $(this).offset().top - $('#main').height() - $(".top-strip").height() }, 800);
		});
	}
	scrollTop(".menu-header-img");
	
	// close menu onclick
	$('a.close_menu').on('click', function(event){
		event.preventDefault();
		var menu = $(this).parentsUntil("menu-header-img");
		target = "#"+menu[1]['id'];
		console.log(target);
    $(target).collapse("hide");
	});
	
	// highlight menu on hover
	$(".category_menu")
  .mouseenter(function() {
		$(this).removeClass('inactive_btn');
  })
  .mouseleave(function() {
		if (!$(this).hasClass("active")) {
			$(this).addClass('inactive_btn');
		}  
	});
	
	// onclick menu, corresponding menu items displayed
	refresh();
	select("#menu_cat1", "#menu_col1");
	
	$("#menu_cat1").click(function() {
		refresh();
		select("#menu_cat1", "#menu_col1");
	});
	
	$("#menu_cat2").click(function() {
		refresh();
		select("#menu_cat2", "#menu_col2");
	});
	
	$("#menu_cat3").click(function() {
		refresh();
		select("#menu_cat3", "#menu_col3");
	});

	$("#menu_cat4").click(function() {
		refresh();
		select("#menu_cat4", "#menu_col4");
	});
	
	$("#menu_cat5").click(function() {
		refresh();
		select("#menu_cat5", "#menu_col5");
	});
	
	$("#menu_cat6").click(function() {
		refresh();
		select("#menu_cat6", "#menu_col6");
	});
});
