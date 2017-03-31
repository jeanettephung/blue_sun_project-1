$(document).click(function (event) {
	// main navbar click out -> close menu
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }

    // menu navbar click out -> close menu
    var clickover = $(event.target);
    var $navbar = $(".menu-navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }

    //menu show more items btn
    function update_btn(old_btn_id, new_btn_id, btn_content){
        $(old_btn_id).removeAttr('id');
        $('.load-more a').attr({
            id : new_btn_id
        });
        $('#' + new_btn_id).html(btn_content);
    }


    $(document).on('click', 'a#more_items', function(event) {
        event.preventDefault();
        $('.menu .hidden_items').slideDown({duration:800,  easing: "easeInOutQuart", complete : function(){
            update_btn('#more_items', 'hide_items', 'hide items<hr/><span class="top_arrow"></span>');
        }});
    });


    $(document).on('click', 'a#hide_items', function(event) {
        event.preventDefault();
        $('.menu .hidden_items').slideUp({duration:800,  easing: "easeInOutQuart", complete : function(){
            update_btn('#hide_items', 'more_items', 'show more<hr/><span class="bottom_arrow"></span>');
        }});
    });
});