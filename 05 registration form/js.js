function validateForm() {

    var noErrors = true;


    var name_check = document.getElementById("username").value;
    var email_check = document.getElementById("email").value;
    var pwd1_check = document.getElementById("password").value;
    var pwd2_check = document.getElementById("password2").value;

    var name_check_err = document.getElementById("username_err").textcontent;
    var email_err = document.getElementById("email_err").textcontent;
    var password_err = document.getElementById("password_err").textcontent;

    var msgname_check_err = "This must be longer than 2 characters!";
    var msgemail_err = "This must be longer than 5 characters!";
    var msgpassword_err = "This must be longer than 10 characters!";


    if (name_check.length < 3) {
        document.getElementById("username_err").textcontent = msgname_check_err;

        noErrors = false;
    }

    else {
        document.getElementById("username_err").textcontent = " ";

    }
    return noErrors;

}


