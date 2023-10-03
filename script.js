const form = document.getElementById("form");

form.addEventListener('submit',e=>{
    e.preventDefault();
    output();
 })

//first name
let first = document.getElementById("firstname");
let nameError1 = document.getElementById("error1");

function fname(){
    if(first.value === ""){
        nameError1.innerHTML = "First name required.";
        nameError1.style.color = "red";
        first.style.border = "1px solid red";
    }
    else if(first.value.length < 4 || first.value.length > 15){
        nameError1.innerHTML = "First name should be Min 4 and Max 15 characters";
        nameError1.style.color = "red";
        first.style.border = "1px solid red";
    }
    else{
        nameError1.innerHTML = "";
        first.style.border = "1px solid #00FF00";
    }
}
//second name
let second = document.getElementById("secondname");
let nameError2 = document.getElementById("error2");

function sname(){
    if(second.value === ""){
        nameError2.innerHTML = "Second name required.";
        nameError2.style.color = "red";
        second.style.border = "1px solid red";
    }
    else if(second.value.length < 1  || second.value.length > 15){
        nameError2.innerHTML = "Second name should be Min 1 and Max 15 characters";
        nameError2.style.color = "red";
        second.style.border = "1px solid red";
    }
    else{
        nameError2.innerHTML = "";
        second.style.border = "1px solid #00FF00";
    }
}

//mobile number
let mobNum = document.getElementById("mobile");
let mobError = document.getElementById("error3");

function phone(){
    if(mobNum.value === ""){
        mobError.innerHTML = "Number is required";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
    }
    else if(isNaN(mobNum.value)){
        mobError.innerHTML = "Enter a valid Number";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
    }
    else if(mobNum.value.length < 10 || mobNum.value.length > 13){
        mobError.innerHTML = "Number should be 10 digit";
        mobError.style.color = "red";
        mobNum.style.border = "1px solid red";
    }
    else{
        mobError.innerHTML = "";
        mobNum.style.border = "1px solid #00FF00";
    }
}

//email
let mail = document.getElementById("email");
let mailError = document.getElementById("error4");

function val_email(){
    if(mail.value === ""){
        mailError.innerHTML = "Email is required"
        mailError.style.color = "red";
        mail.style.border = "1px solid red";
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = "Enter a valid email";
        mailError.style.color = "red";
        mail.style.border = "1px solid red";

    }
    else{
        mailError.innerHTML = "";
        mail.style.border = "1px solid #00df00";
    }
}

//address
let address = document.getElementById("address");
let addError = document.getElementById("error5");

function val_address(){
    if(address.value === ""){
        addError.innerHTML = "Address is required"
        addError.style.color = "red";
        address.style.border = "1px solid red";

    }
    else{
        addError.innerHTML = "";
        address.style.border = "1px solid #00df00";
    }
}

//state
let select = document.getElementById("state");
let stateError = document.getElementById("error6");

function validatestate(){
    if(select.value === "1"){
        stateError.innerHTML = "Select the valid state";
        stateError.style.color = "red";
        select.style.border = "1px solid red";
    }
    else{
        stateError.innerHTML = "";
        select.style.border = "1px solid #00df00";
    }
}

//district
let dist = document.getElementById("dist");
let distError = document.getElementById("error7");

function district(){
    if(dist.value === ""){
        distError.innerHTML = "District name is required"
        distError.style.color = "red"
        dist.style.border = "1px solid red"
    }
    else if(!dist.value.match(/^[a-zA-Z]+$/)){
        distError.innerHTML = "Enter a valid pincode";
        distError.style.color = "red"
        dist.style.border = "1px solid red";
    }
    else{
        distError.innerHTML = "";
        dist.style.border = "1px solid #00df00";
    }
}

//pincode
let pin = document.getElementById("pin");
let pinError = document.getElementById("error8");

function pincode(){
    if(pin.value === ""){
        pinError.innerHTML = "Pin Code required"
        pinError.style.color = "red"
        pin.style.border = "1px solid red"
    }
    else if(isNaN(pin.value)){
        pinError.innerHTML = "Enter a valid pincode";
        pinError.style.color = "red"
        pin.style.border = "1px solid red";
    }
    else if(pin.value.length < 6 || pin.value.length > 6 ){
        pinError.innerHTML = "Enter a 6 digit [incode";
        pinError.style.color = "red"
        pin.style.border = "1px solid red";
    }
    else{
        pinError.innerHTML = "";
        pin.style.border = "1px solid #00df00";
    }
}

