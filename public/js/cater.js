/**
 * Created by arnoldchen on 3/9/17.
 */
//$('#cater-form').on('submit', function() { console.log("what"); });

$(document).ready(function() {
    $( '#cater_submit' ).click( function(event) {




        name    = $('#name').val();
        email   = $('#email').val();
        phone   = $('#phone').val();
        date    = $('#date').val();
        message = $('#message').val();
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
        }


        event.preventDefault();

    });



});
