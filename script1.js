// JavaScript source code
//The following is script for form validation on the contact page.

document.getElementById("theform");
document.getElementById("firstname");
document.getElementById("lastname");
document.getElementById("email");
document.getElementById("phonenumber");
var emailCon = document.getElementById("emailcontact");
var phoneCon = document.getElementById("phonecontact");
var commentArea = document.getElementById("comment");
var submit = document.getElementById("submitbttn");


function validate()
    {
        "use strict";
        var userName = document.getElementById("firstname").value,
            userEmail = document.getElementById("email").value,
            userNumber = document.getElementById("phonenumber").value,
            emailCheck = document.getElementById("emailcontact").checked,
            phoneCheck = document.getElementById("phonecontact").checked;

        if (emailCheck && phoneCheck)
            {
                alert("Please only check one - email or phone.");
                return false;
            }
            else if (phoneCheck)
            {
                alert("Thank you for your feedback, " + userName + ".\n Someone will contact you via phone number at: " + userNumber + ".");
                return true;
            }
            else if (emailCheck)
            {
                alert("Thank you for your feedback, " + userName + ".\n Someone will contact you via email at: " + userEmail + ".");
                return true;
            }
            else
            {
                alert("Please check a method of contact.");
                return false;
            }
    }