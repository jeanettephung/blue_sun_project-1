/**
 * Created by arnoldchen on 3/9/17.
 */

$(document).ready(function() {
	
    $( '#cater_submit' ).click( function(event) {

        var name    = $('#name').val();
        var email   = $('#email').val();
        var phone   = $('#phone').val();
        var date    = $('#date').val();
        var message = $('#message').val();

        if ( name == ""){
							$('#name_modal').modal('show'); 

        } else if  (  !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ) ) {
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
            //send something
            $.get("http://localhost:3000/send",{
							'name': name,
							'date': date,
							'message': "Name: " + name + '\n' +  "Email: " + email + '\n' + "Date: " + date + ' (year-month-date)\n' + "Phone: " + phone + '\n' + "Message: " + message + '\n'
							
						},function(){

						$('#success_modal').modal('show');

            });

        }



        event.preventDefault();


    });



});
