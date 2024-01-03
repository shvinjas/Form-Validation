console.log("hi hello");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkInput();
});

function checkInput() {

    
const usernamevalue = username.value.trim();
const emailvalue = email.value.trim();
const passwordvalue = password.value.trim();
const cpasswordvalue = cpassword.value.trim();

const emailDomainsToExclude=/(gmail|yahoo|hotmail)\.com$/i;

function isEmail(email){
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|in|jobs|museum)\b/.test(email);
}

    if (usernamevalue === "") {
        setError(username, "Username cannot be blank");
    }
    else if (!/^[a-zA-Z0-9@]+$/.test(usernamevalue)){
        setError(username, "Invalid symbol in username");
    }
    else {
        setSuccess(username)
    }

    if (emailvalue === "") {
        setError(email, "E-mail cannot be blank");
    }
    else if(!isEmail(emailvalue)) {
        setError(email, "Enter a valid E-mail id");
    }
    else if(emailDomainsToExclude.test(emailvalue)){
        setError(email,"Provide your organization Email Id")
    }
    else {
        setSuccess(email)
    }
   
    if (passwordvalue === "") {
        setError(password, "password cannot be blank");
    }
    else {
        setSuccess(password)
    }

    if (cpasswordvalue === "") {
        setError(cpassword, "password cannot be blank");
    }
    else if(passwordvalue!==cpasswordvalue){
        setError(cpassword, "password not matching")
    }
    else {
        setSuccess(cpassword)
    }
    
}

function setError(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control error";
    const small=formcontrol.querySelector("small");
    small.innerText=message;
}


    function setSuccess(input,message){
        const formcontrol=input.parentElement;
        formcontrol.className="form-control success";
        const small=formcontrol.querySelector("small");
        small.innerText=message;
}