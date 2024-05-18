function process(event){
    event.preventDefault();
    document.getElementById("submit-error").innerHTML = "Form submitted Successfully!";
}
const nameRegex  = /^([a-zA-Z]+(?: [a-zA-Z]+)*){1,2}$/;
function validateName(){
    const name = document.getElementById('name').value; 
    if(!nameRegex.test(name)){
        document.getElementById("name-error").innerHTML = "Enter a valid name!";
    }else{
        document.getElementById("name-error").innerHTML = "";
    }
}
const phoneRegex = /^01[3-9]\d{8}$/;
function chkphoneno(){
    const phone = document.getElementById('phone').value;
    if(!phoneRegex.test(phone)){
        document.getElementById("phone-error").innerHTML = "Enter a valid phone number";
    }else{
        document.getElementById("phone-error").innerHTML = "";
    }
}
const emailRegex = /^[A-Za-z0-9._%+-]+@bup\.edu\.bd/;

function chkemail(){
    const email = document.getElementById('email').value;
    if(!emailRegex.test(email)){
        document.getElementById("email-error").innerHTML = "Enter a valid bup edumail";
    }else{
        document.getElementById("email-error").innerHTML = "";
    }
}