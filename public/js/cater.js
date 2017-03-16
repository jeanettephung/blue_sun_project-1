/**
 * Created by arnoldchen on 3/9/17.
 */
//$('#cater-form').on('submit', function() { console.log("what"); });

$(document).ready(function() {
    $( '#cater_submit' ).click( function(event) {




        var name    = $('#name').val();
        var email   = $('#email').val();
        var phone   = $('#phone').val();
        var date    = $('#date').val();
        var message = $('#message').val();
        console.log(name);

        if ( name == ""){
            alert("Name must be filled out");

        } else if  (  !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ) ) {
            alert("You have entered an invalid email address!")

        } else if (isNaN(phone)){
            alert("Phone must be filled out and must only be numbers");

        } else if (date==""){
            alert("date must be filled out");

        } else if (message ==""){
            alert("Message must be filled out");
        } else {
            //send something
            $.get("http://localhost:3000/send",{name: name, email: email, phone: phone, date: date, message: message },function(){

                alert("Message has been successfully sent")

            });

        }



        event.preventDefault();


    });



});
