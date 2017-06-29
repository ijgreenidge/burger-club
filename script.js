$(document).ready(function() {

     function name() {
       var userName = $("#name").val();
    };
    
    
     function email (){
      var email =  $("#email").val();
    };
    
    $("#signUp").click(function() {

        // console.log("Hi");
           alert("Hi" + userName + " " + " " + "thank you for signing up! We will send you an email to" + " " + email + " " + " shortly");
    });



});
