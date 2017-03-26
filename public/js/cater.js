$(document).ready(function() {
	
	// change display of button
	function display(none, show) {
		$(none).css("display", "none");
		$(show).css("display", "inherit");
	}
	
	// empty field
	function empty(field) {
		$(field).val("");
	}

	$('#cater_submit').click(function(event) {
		
		// input fields
		var name    = $('#name').val();
		var email   = $('#email').val();
		var phone   = $('#phone').val();
		var date    = $('#date').val();
		var message = $('#message').val();
		
		// error messages
		if (name == ""){
					$('#name_modal').modal('show'); 
		} else if  (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ) ) {
				$('#email_modal').modal('show'); 
		} else if (isNaN(phone)){
				$('#phone_modal').modal('show');
		} else if (phone.toString().length < 10 ){
				$('#phone2_modal').modal('show');
		} else if (date==""){
				$('#date_modal').modal('show');
		} else if (message ==""){
				$('#message_modal').modal('show');
		} else {
			//send message
			$.get("/send",{
				'name': name,
				'date': date,
				'message': "Name: " + name + '\n' +  "Email: " + email + '\n' + "Date: " + date + ' (year-month-date)\n' + "Phone: " + phone + '\n' + "Message: " + message + '\n'
			},function(){
				$('#success_modal').modal('show');
			});
		}
		event.preventDefault();
		
		//loading button when sending message
		display("#cater_submit", "#cater_load");
	});
	
	// reset page
	$("#success_modal").click(function(){
		display("#cater_load", "#cater_submit");
		empty("#name");
		empty("#email");
		empty("#phone");
		empty("#date");
		empty("#message");
	});
});
