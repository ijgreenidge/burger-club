$(document).ready(function() {

    $("#signUp").click(function() {
        
        var userName = $("#name").val();
        var email = $("#email").val();
        //console.log(email);
        
        
        alert("Hi" + " " + userName + " " + "thank you for signing up! We will send you an email to" + " " + email + " shortly");
    });



});
